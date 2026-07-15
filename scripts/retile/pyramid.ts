// Bottom-up, encode-last pyramid builder.
//
// Quality rule (encode-last): every zoom level is built from LOSSLESS data. Base tiles come straight
// from the source; each parent tile is the 2x downscale of the 512px square formed by its four
// children's LOSSLESS intermediates (never from already-encoded WebP). Each tile is written twice:
// the final lossy WebP into the output tree, and a lossless PNG intermediate into a temp tree that
// feeds the next level up. The temp tree is deleted when the layer completes.

import fs from 'fs';
import os from 'os';
import path from 'path';

import sharp from 'sharp';

import { BaseGrid, TILE_SIZE } from './types';

const PARENT_SIZE = TILE_SIZE * 2;
// Low compression effort keeps the throwaway intermediates cheap to write and read.
const INTERMEDIATE_PNG_COMPRESSION = 1;

const RAW_TILE = { width: TILE_SIZE, height: TILE_SIZE, channels: 3 } as const;
const RAW_PARENT = { width: PARENT_SIZE, height: PARENT_SIZE, channels: 3 } as const;

// Bounded-concurrency promise pool. run() returns once a slot is free (backpressure); the first
// task error is captured and re-thrown from run()/drain() so failures fail the whole build.
class PromisePool {
  private readonly limit: number;
  private readonly active = new Set<Promise<void>>();
  private firstError: unknown = null;

  constructor(limit: number) {
    this.limit = limit;
  }

  async run(task: () => Promise<void>): Promise<void> {
    if (this.firstError) throw this.firstError;
    let entry: Promise<void> | null = null;
    const wrapped = (async () => {
      try {
        await task();
      } catch (err) {
        if (!this.firstError) this.firstError = err;
      } finally {
        if (entry) this.active.delete(entry);
      }
    })();
    entry = wrapped;
    this.active.add(wrapped);
    if (this.active.size >= this.limit) {
      await Promise.race(this.active);
    }
    if (this.firstError) throw this.firstError;
  }

  async drain(): Promise<void> {
    await Promise.all(this.active);
    if (this.firstError) throw this.firstError;
  }
}

function tilePath(baseDir: string, z: number, x: number, y: number, ext: string): string {
  return path.join(baseDir, String(z), String(x), `${y}.${ext}`);
}

// Write one tile's final WebP and its lossless PNG intermediate from the same raw RGB buffer.
async function writeTileOutputs(
  rgb: Buffer,
  webpPath: string,
  intermediatePath: string,
  quality: number
): Promise<void> {
  const image = sharp(rgb, { raw: RAW_TILE });
  await Promise.all([
    image.clone().webp({ quality }).toFile(webpPath),
    image.clone().png({ compressionLevel: INTERMEDIATE_PNG_COMPRESSION }).toFile(intermediatePath),
  ]);
}

function readIntermediate(intermediatePath: string): Promise<Buffer> {
  return sharp(intermediatePath).removeAlpha().raw().toBuffer();
}

function placeChild(parent: Buffer, child: Buffer, offsetX: number, offsetY: number): void {
  for (let row = 0; row < TILE_SIZE; row += 1) {
    const src = row * TILE_SIZE * 3;
    const dst = ((offsetY + row) * PARENT_SIZE + offsetX) * 3;
    child.copy(parent, dst, src, src + TILE_SIZE * 3);
  }
}

// Build one parent tile from its four children's lossless intermediates.
async function buildParentTile(
  tmpDir: string,
  outDir: string,
  z: number,
  x: number,
  y: number,
  quality: number
): Promise<void> {
  const cz = z + 1;
  const [topLeft, topRight, bottomLeft, bottomRight] = await Promise.all([
    readIntermediate(tilePath(tmpDir, cz, 2 * x, 2 * y, 'png')),
    readIntermediate(tilePath(tmpDir, cz, 2 * x + 1, 2 * y, 'png')),
    readIntermediate(tilePath(tmpDir, cz, 2 * x, 2 * y + 1, 'png')),
    readIntermediate(tilePath(tmpDir, cz, 2 * x + 1, 2 * y + 1, 'png')),
  ]);

  const composite = Buffer.allocUnsafe(PARENT_SIZE * PARENT_SIZE * 3);
  placeChild(composite, topLeft, 0, 0);
  placeChild(composite, topRight, TILE_SIZE, 0);
  placeChild(composite, bottomLeft, 0, TILE_SIZE);
  placeChild(composite, bottomRight, TILE_SIZE, TILE_SIZE);

  const downscaled = await sharp(composite, { raw: RAW_PARENT })
    .resize(TILE_SIZE, TILE_SIZE, { kernel: 'lanczos3' })
    .raw()
    .toBuffer();

  await writeTileOutputs(downscaled, tilePath(outDir, z, x, y, 'webp'), tilePath(tmpDir, z, x, y, 'png'), quality);
}

async function ensureLevelDirs(outDir: string, tmpDir: string, z: number, gridSize: number): Promise<void> {
  for (let x = 0; x < gridSize; x += 1) {
    await fs.promises.mkdir(path.join(outDir, String(z), String(x)), { recursive: true });
    await fs.promises.mkdir(path.join(tmpDir, String(z), String(x)), { recursive: true });
  }
}

type Logger = (message: string) => void;

// Cut the base level from the source, then build every parent level bottom-up. Returns tile count.
export async function buildPyramid(grid: BaseGrid, outDir: string, quality: number, log: Logger): Promise<number> {
  const tmpDir = path.join(outDir, '.tmp');
  await fs.promises.rm(tmpDir, { recursive: true, force: true });
  await fs.promises.mkdir(tmpDir, { recursive: true });

  const { baseZoom, mapPx } = grid;
  const baseGrid = mapPx / TILE_SIZE;
  const pool = new PromisePool(Math.max(1, os.cpus().length));
  let tileCount = 0;

  // Base level: extract lossless tiles from the source, encode final WebP + lossless intermediate.
  await ensureLevelDirs(outDir, tmpDir, baseZoom, baseGrid);
  log(`Cutting base zoom ${baseZoom}: ${baseGrid} x ${baseGrid} = ${baseGrid * baseGrid} tiles`);
  for (let by = 0; by < baseGrid; by += 1) {
    await grid.prepareRow(by);
    for (let bx = 0; bx < baseGrid; bx += 1) {
      const rgb = grid.readBaseTile(bx, by);
      tileCount += 1;
      await pool.run(() =>
        writeTileOutputs(
          rgb,
          tilePath(outDir, baseZoom, bx, by, 'webp'),
          tilePath(tmpDir, baseZoom, bx, by, 'png'),
          quality
        )
      );
    }
  }
  await pool.drain();
  grid.dispose();

  // Parent levels: each tile is the 2x downscale of its four children's lossless intermediates.
  for (let z = baseZoom - 1; z >= 0; z -= 1) {
    const gridSize = 2 ** z;
    await ensureLevelDirs(outDir, tmpDir, z, gridSize);
    log(`Building zoom ${z}: ${gridSize} x ${gridSize} = ${gridSize * gridSize} tiles`);
    for (let y = 0; y < gridSize; y += 1) {
      for (let x = 0; x < gridSize; x += 1) {
        tileCount += 1;
        await pool.run(() => buildParentTile(tmpDir, outDir, z, x, y, quality));
      }
    }
    await pool.drain();
  }

  await fs.promises.rm(tmpDir, { recursive: true, force: true });
  return tileCount;
}
