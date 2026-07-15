// Capture-tile (.tga) parsing and the capture-backed BaseGrid.
//
// Capture tiles are named planetMap_<scene>_<NNNN>.tga where NNNN is a zero-padded, row-major index
// (row 0 = NORTH/top, col 0 = WEST/left). Each file is an uncompressed 32-bit BGRA TGA stored
// bottom-up. sharp/libvips cannot read TGA, so we parse the header and pixels by hand and hand raw
// RGB to sharp downstream. The alpha byte is blend residue and is discarded (opaque RGB out).

import fs from 'fs';
import path from 'path';

import { BaseGrid, TILE_SIZE } from './types';

const HEADER_SIZE = 18;

interface TgaDimensions {
  width: number;
  height: number;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Validate the 18-byte TGA header against the exact capture format and return the pixel dimensions.
export function parseTgaHeader(buf: Buffer, label: string): TgaDimensions {
  if (buf.length < HEADER_SIZE) {
    throw new Error(`${label}: file smaller than an 18-byte TGA header (${buf.length} bytes)`);
  }
  if (buf[0] !== 0) {
    throw new Error(`${label}: expected id length 0, got ${buf[0]}`);
  }
  if (buf[1] !== 0) {
    throw new Error(`${label}: expected no colormap (byte 1 == 0), got ${buf[1]}`);
  }
  if (buf[2] !== 2) {
    throw new Error(`${label}: expected uncompressed truecolor (image type 2), got ${buf[2]}`);
  }
  if (buf[16] !== 32) {
    throw new Error(`${label}: expected 32 bits-per-pixel, got ${buf[16]}`);
  }
  // Origin bits (0x30) must be clear: bottom-up, left-to-right scanlines.
  if ((buf[17] & 0x30) !== 0) {
    throw new Error(`${label}: expected bottom-up origin (descriptor bits 0x30 clear), got 0x${buf[17].toString(16)}`);
  }
  const width = buf.readUInt16LE(12);
  const height = buf.readUInt16LE(14);
  if (width < 1 || height < 1) {
    throw new Error(`${label}: invalid dimensions ${width}x${height}`);
  }
  return { width, height };
}

// Read just the 18-byte header and the on-disk size of a capture tile, for validation.
async function readHeaderAndSize(filePath: string): Promise<{ dims: TgaDimensions; size: number }> {
  const handle = await fs.promises.open(filePath, 'r');
  try {
    const header = Buffer.allocUnsafe(HEADER_SIZE);
    const { bytesRead } = await handle.read(header, 0, HEADER_SIZE, 0);
    const dims = parseTgaHeader(header.subarray(0, bytesRead), path.basename(filePath));
    const { size } = await handle.stat();
    return { dims, size };
  } finally {
    await handle.close();
  }
}

// Decode BGRA pixel data into a packed, TOP-DOWN RGB buffer (width * height * 3).
// Bottom-up storage means file scanline s maps to top-down image row (height - 1 - s).
export function decodeTgaToRgb(buf: Buffer, width: number, height: number, label: string): Buffer {
  const needed = HEADER_SIZE + width * height * 4;
  if (buf.length < needed) {
    throw new Error(`${label}: truncated pixel data (need ${needed} bytes, have ${buf.length})`);
  }
  const out = Buffer.allocUnsafe(width * height * 3);
  const srcRowBytes = width * 4;
  const dstRowBytes = width * 3;
  for (let scanline = 0; scanline < height; scanline += 1) {
    const topRow = height - 1 - scanline;
    let src = HEADER_SIZE + scanline * srcRowBytes;
    let dst = topRow * dstRowBytes;
    for (let x = 0; x < width; x += 1) {
      // Source order is B, G, R, A (alpha ignored).
      out[dst] = buf[src + 2];
      out[dst + 1] = buf[src + 1];
      out[dst + 2] = buf[src];
      src += 4;
      dst += 3;
    }
  }
  return out;
}

interface CaptureGridOptions {
  dir: string;
  scene: string;
  mapPx: number;
  baseZoom: number;
}

// Enumerate, validate, and wrap a directory of capture tiles as a BaseGrid.
// Fails loudly (before any tiling work) on any structural problem: a missing index, a wrong count,
// a mis-sized tile, a bad header, or a truncated file — a single hole shifts the whole grid.
export async function createCaptureGrid(options: CaptureGridOptions): Promise<BaseGrid> {
  const { dir, scene, mapPx, baseZoom } = options;

  let entries: string[];
  try {
    entries = await fs.promises.readdir(dir);
  } catch {
    throw new Error(`Capture dir not readable: ${dir}`);
  }

  const pattern = new RegExp(`^planetMap_${escapeRegExp(scene)}_(\\d+)\\.tga$`);
  const filesByIndex = new Map<number, string>();
  for (const name of entries) {
    const match = pattern.exec(name);
    if (!match) continue;
    const index = Number.parseInt(match[1], 10);
    const existing = filesByIndex.get(index);
    if (existing) {
      throw new Error(`Capture dir ${dir}: duplicate index ${index} (${name} and ${path.basename(existing)})`);
    }
    filesByIndex.set(index, path.join(dir, name));
  }
  if (filesByIndex.size === 0) {
    throw new Error(`Capture dir ${dir}: no tiles matching planetMap_${scene}_<NNNN>.tga`);
  }

  const firstPath = filesByIndex.get(0);
  if (!firstPath) {
    throw new Error(`Capture dir ${dir}: missing tile index 0 (planetMap_${scene}_0000.tga)`);
  }
  const first = await readHeaderAndSize(firstPath);
  const { width: tileW, height: tileH } = first.dims;

  const columns = Math.ceil(mapPx / tileW);
  const rows = Math.ceil(mapPx / tileH);
  const expected = columns * rows;
  if (filesByIndex.size !== expected) {
    throw new Error(
      `Capture dir ${dir}: expected ${expected} tiles ` +
        `(${columns} cols x ${rows} rows for a ${mapPx}px map with ${tileW}x${tileH} tiles) ` +
        `but found ${filesByIndex.size}`
    );
  }
  // Full per-tile validation: no holes (a single hole shifts the whole grid), plus exact header
  // shape, matching dimensions, and non-truncated pixel data. Only the 18-byte header and the file
  // size are read — a full-content read here would be an extra multi-GB pass over a large capture
  // set before any tiling work starts.
  const requiredBytes = HEADER_SIZE + tileW * tileH * 4;
  for (let i = 0; i < expected; i += 1) {
    const filePath = filesByIndex.get(i);
    if (!filePath) {
      throw new Error(`Capture dir ${dir}: missing tile index ${i} of ${expected} (a hole shifts the whole grid)`);
    }
    const { dims, size } = await readHeaderAndSize(filePath);
    if (dims.width !== tileW || dims.height !== tileH) {
      throw new Error(
        `${path.basename(filePath)}: dimensions ${dims.width}x${dims.height} differ from first tile ${tileW}x${tileH}`
      );
    }
    if (size < requiredBytes) {
      throw new Error(`${path.basename(filePath)}: truncated (need >= ${requiredBytes} bytes, have ${size})`);
    }
  }

  // Decoded-row cache: capture row index -> (column index -> top-down RGB buffer).
  const cache = new Map<number, Map<number, Buffer>>();

  async function loadTile(r: number, c: number): Promise<Buffer> {
    const index = r * columns + c;
    const filePath = filesByIndex.get(index);
    if (!filePath) {
      throw new Error(`Capture dir ${dir}: missing tile index ${index}`);
    }
    const buf = await fs.promises.readFile(filePath);
    return decodeTgaToRgb(buf, tileW, tileH, path.basename(filePath));
  }

  async function prepareRow(by: number): Promise<void> {
    const r0 = Math.floor((by * TILE_SIZE) / tileH);
    const r1 = Math.floor((by * TILE_SIZE + TILE_SIZE - 1) / tileH);
    for (const r of Array.from(cache.keys())) {
      if (r < r0) cache.delete(r);
    }
    for (let r = r0; r <= r1; r += 1) {
      if (!cache.has(r)) {
        const rowTiles = new Map<number, Buffer>();
        for (let c = 0; c < columns; c += 1) {
          rowTiles.set(c, await loadTile(r, c));
        }
        cache.set(r, rowTiles);
      }
    }
  }

  function getCachedTile(r: number, c: number): Buffer {
    const rowTiles = cache.get(r);
    const tile = rowTiles?.get(c);
    if (!tile) {
      throw new Error(`Internal error: capture tile (row ${r}, col ${c}) requested before prepareRow loaded it`);
    }
    return tile;
  }

  function readBaseTile(bx: number, by: number): Buffer {
    const out = Buffer.allocUnsafe(TILE_SIZE * TILE_SIZE * 3);
    for (let py = 0; py < TILE_SIZE; py += 1) {
      const gy = by * TILE_SIZE + py;
      const r = Math.floor(gy / tileH);
      const ly = gy - r * tileH;
      let px = 0;
      while (px < TILE_SIZE) {
        const gx = bx * TILE_SIZE + px;
        const c = Math.floor(gx / tileW);
        const lx = gx - c * tileW;
        // Copy a contiguous run within one capture column, clipped to the 256px output row.
        const run = Math.min(tileW - lx, TILE_SIZE - px);
        const tile = getCachedTile(r, c);
        const srcOff = (ly * tileW + lx) * 3;
        const dstOff = (py * TILE_SIZE + px) * 3;
        tile.copy(out, dstOff, srcOff, srcOff + run * 3);
        px += run;
      }
    }
    return out;
  }

  return {
    mapPx,
    baseZoom,
    prepareRow,
    readBaseTile,
    dispose: () => cache.clear(),
  };
}
