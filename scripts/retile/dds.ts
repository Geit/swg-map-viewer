// DDS (DirectDraw Surface) parsing for the client's own map art (texture/ui_map_<scene>.dds).
//
// The SWG client ships its map images block-compressed: DXT1 for the planet maps, DXT5 for a few
// others. sharp/libvips cannot read DDS, so — as with the .tga capture tiles — we parse the header
// and decode the blocks by hand and hand raw RGB to sharp downstream. Alpha is discarded (opaque
// RGB out), matching the rest of the pipeline.

import fs from 'fs';
import path from 'path';

const MAGIC = 'DDS ';
// 4-byte magic + 124-byte DDS_HEADER; the top-level surface starts immediately after.
const HEADER_SIZE = 128;
const DDS_HEADER_SIZE = 124;

// Byte offsets into the file (not into DDS_HEADER) of the fields we read.
const OFFSET_HEADER_SIZE = 4;
const OFFSET_HEIGHT = 12;
const OFFSET_WIDTH = 16;
const OFFSET_PIXELFORMAT_FLAGS = 80;
const OFFSET_FOURCC = 84;

const DDPF_FOURCC = 0x4;

// Bytes per 4x4 block, by FourCC.
const BLOCK_BYTES: Record<string, number> = { DXT1: 8, DXT5: 16 };

export interface DdsInfo {
  width: number;
  height: number;
  fourCC: string;
  blockBytes: number;
}

export interface DdsImage {
  width: number;
  height: number;
  // Packed, top-down RGB (width * height * 3).
  data: Buffer;
}

// Validate the 128-byte header against the formats we support and return the surface geometry.
export function parseDdsHeader(buf: Buffer, label: string): DdsInfo {
  if (buf.length < HEADER_SIZE) {
    throw new Error(`${label}: file smaller than a ${HEADER_SIZE}-byte DDS header (${buf.length} bytes)`);
  }
  if (buf.toString('ascii', 0, 4) !== MAGIC) {
    throw new Error(`${label}: not a DDS file (missing "DDS " magic)`);
  }
  const headerSize = buf.readUInt32LE(OFFSET_HEADER_SIZE);
  if (headerSize !== DDS_HEADER_SIZE) {
    throw new Error(`${label}: expected a ${DDS_HEADER_SIZE}-byte DDS_HEADER, got ${headerSize}`);
  }
  if ((buf.readUInt32LE(OFFSET_PIXELFORMAT_FLAGS) & DDPF_FOURCC) === 0) {
    throw new Error(`${label}: expected a block-compressed (FourCC) surface, got an uncompressed one`);
  }
  const fourCC = buf.toString('ascii', OFFSET_FOURCC, OFFSET_FOURCC + 4);
  const blockBytes = BLOCK_BYTES[fourCC];
  if (!blockBytes) {
    throw new Error(
      `${label}: unsupported compression "${fourCC}" (expected ${Object.keys(BLOCK_BYTES).join(' or ')})`
    );
  }
  const width = buf.readUInt32LE(OFFSET_WIDTH);
  const height = buf.readUInt32LE(OFFSET_HEIGHT);
  if (width < 1 || height < 1) {
    throw new Error(`${label}: invalid dimensions ${width}x${height}`);
  }
  return { width, height, fourCC, blockBytes };
}

// Decode the top-level surface into a packed, top-down RGB buffer (width * height * 3).
export function decodeDdsToRgb(buf: Buffer, info: DdsInfo, label: string): Buffer {
  const { width, height, fourCC, blockBytes } = info;
  const blocksX = Math.ceil(width / 4);
  const blocksY = Math.ceil(height / 4);
  const needed = HEADER_SIZE + blocksX * blocksY * blockBytes;
  if (buf.length < needed) {
    throw new Error(`${label}: truncated pixel data (need ${needed} bytes, have ${buf.length})`);
  }

  const out = Buffer.allocUnsafe(width * height * 3);
  const rowBytes = width * 3;
  // Scratch RGB palette for the current block: four entries of three bytes, reused across blocks.
  const palette = new Uint8Array(12);
  // DXT5 prefixes each block with 8 bytes of alpha; DXT1's colour block starts the block.
  const colourOffset = blockBytes - 8;
  const alwaysFourColour = fourCC !== 'DXT1';

  // Expand one RGB565 endpoint into palette entry `at`, replicating the high bits into the low ones
  // so a saturated channel reaches a full 255.
  const unpack565 = (value: number, at: number): void => {
    const r = (value >> 11) & 0x1f;
    const g = (value >> 5) & 0x3f;
    const b = value & 0x1f;
    palette[at] = (r << 3) | (r >> 2);
    palette[at + 1] = (g << 2) | (g >> 4);
    palette[at + 2] = (b << 3) | (b >> 2);
  };

  // Fill all four palette entries from the colour block at `at`. A DXT1 block whose endpoints are
  // ordered c0 <= c1 selects the three-colour mode, whose fourth entry is transparent black; DXT5
  // always uses the four-colour mode, since its alpha lives in the separate half-block.
  const buildPalette = (at: number): void => {
    const c0 = buf.readUInt16LE(at);
    const c1 = buf.readUInt16LE(at + 2);
    unpack565(c0, 0);
    unpack565(c1, 3);

    if (alwaysFourColour || c0 > c1) {
      // Truncated, not rounded: the spec leaves this to the implementation, and truncating matches
      // the committed lossless PNGs byte for byte.
      for (let i = 0; i < 3; i += 1) {
        palette[6 + i] = ((2 * palette[i] + palette[3 + i]) / 3) | 0;
        palette[9 + i] = ((palette[i] + 2 * palette[3 + i]) / 3) | 0;
      }
      return;
    }
    for (let i = 0; i < 3; i += 1) {
      palette[6 + i] = (palette[i] + palette[3 + i]) >> 1;
      palette[9 + i] = 0;
    }
  };

  for (let by = 0; by < blocksY; by += 1) {
    for (let bx = 0; bx < blocksX; bx += 1) {
      const block = HEADER_SIZE + (by * blocksX + bx) * blockBytes + colourOffset;
      buildPalette(block);
      // Then 4 bytes of 2-bit palette indices: one byte per block row, leftmost pixel in the low bits.
      for (let py = 0; py < 4; py += 1) {
        const y = by * 4 + py;
        // A non-multiple-of-4 surface pads its last block row/column; drop the padding.
        if (y >= height) break;
        const indices = buf[block + 4 + py];
        let dst = y * rowBytes + bx * 4 * 3;
        for (let px = 0; px < 4; px += 1) {
          if (bx * 4 + px >= width) break;
          const entry = ((indices >> (px * 2)) & 0x3) * 3;
          out[dst] = palette[entry];
          out[dst + 1] = palette[entry + 1];
          out[dst + 2] = palette[entry + 2];
          dst += 3;
        }
      }
    }
  }
  return out;
}

// Read just the header, for dimension and format validation without decoding the surface.
export async function readDdsInfo(filePath: string): Promise<DdsInfo> {
  const handle = await fs.promises.open(filePath, 'r');
  try {
    const header = Buffer.allocUnsafe(HEADER_SIZE);
    const { bytesRead } = await handle.read(header, 0, HEADER_SIZE, 0);
    return parseDdsHeader(header.subarray(0, bytesRead), path.basename(filePath));
  } finally {
    await handle.close();
  }
}

// Only the top-level surface is read; any mipmaps stored after it are ignored.
export async function decodeDdsFile(filePath: string): Promise<DdsImage> {
  const label = path.basename(filePath);
  const buf = await fs.promises.readFile(filePath);
  const info = parseDdsHeader(buf, label);
  return { width: info.width, height: info.height, data: decodeDdsToRgb(buf, info, label) };
}
