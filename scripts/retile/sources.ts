// Layer resolution for the retiler pipeline. Turns a described layer (a master PNG or a directory
// of capture tiles) into geometry (mapPx, baseZoom) plus a factory that builds the appropriate
// BaseGrid. Source paths are resolved by the caller; nothing here reads a config file.

import path from 'path';

import sharp from 'sharp';

import { decodeDdsFile, readDdsInfo } from './dds';
import { createCaptureGrid } from './tga';
import { BaseGrid, TILE_SIZE } from './types';

// q90 measured on real capture imagery: ~half the encode artifacts of q80, still ~15-20x smaller
// than the pngquant tiles the legacy pipeline produces.
export const DEFAULT_QUALITY = 90;

export type LayerSource =
  | { type: 'master'; path: string }
  | { type: 'capture'; dir: string; scene: string; metersPerPixel: number; mapWidthMeters: number };

export interface LayerRequest {
  layerKey: string;
  planet: string;
  quality: number;
  source: LayerSource;
}

export interface ResolvedLayer {
  layerKey: string;
  planet: string;
  quality: number;
  sourceType: 'master' | 'capture';
  metersPerPixel: number | null;
  mapPx: number;
  baseZoom: number;
  createGrid: () => Promise<BaseGrid>;
}

function isPowerOfTwo(n: number): boolean {
  return Number.isInteger(n) && n >= 1 && (n & (n - 1)) === 0;
}

// Client map art is block-compressed DDS, which sharp cannot read; both paths yield packed
// top-down RGB, so the grid below is format-agnostic.
function isDds(absPath: string): boolean {
  return path.extname(absPath).toLowerCase() === '.dds';
}

async function readMasterSize(absPath: string): Promise<{ width: number; height: number }> {
  if (isDds(absPath)) {
    return readDdsInfo(absPath);
  }
  const meta = await sharp(absPath, { limitInputPixels: false }).metadata();
  if (!meta.width || !meta.height) {
    throw new Error(`Master ${absPath}: could not read image dimensions`);
  }
  return { width: meta.width, height: meta.height };
}

async function decodeMaster(absPath: string): Promise<{ data: Buffer; width: number; height: number }> {
  if (isDds(absPath)) {
    return decodeDdsFile(absPath);
  }
  // limitInputPixels: sharp refuses >268MP by default; capture-derived masters run to 1GP+.
  const { data, info } = await sharp(absPath, { limitInputPixels: false })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { data, width: info.width, height: info.height };
}

// Decode a single square master image once into a top-down RGB buffer and serve base tiles as
// sub-region copies. Intended for the legacy 4096px masters (~50MB raw); larger masters should use
// capture sources, which never hold the whole map in memory.
async function createMasterGrid(absPath: string, mapPx: number, baseZoom: number): Promise<BaseGrid> {
  const { data, width, height } = await decodeMaster(absPath);
  if (width !== mapPx || height !== mapPx) {
    throw new Error(`Master ${absPath}: decoded to ${width}x${height}, expected ${mapPx}x${mapPx}`);
  }
  let store: Buffer | null = data;

  return {
    mapPx,
    baseZoom,
    prepareRow: () => Promise.resolve(),
    readBaseTile: (bx: number, by: number): Buffer => {
      if (!store) {
        throw new Error('Master grid used after dispose()');
      }
      const out = Buffer.allocUnsafe(TILE_SIZE * TILE_SIZE * 3);
      for (let py = 0; py < TILE_SIZE; py += 1) {
        const gy = by * TILE_SIZE + py;
        const srcOff = (gy * mapPx + bx * TILE_SIZE) * 3;
        const dstOff = py * TILE_SIZE * 3;
        store.copy(out, dstOff, srcOff, srcOff + TILE_SIZE * 3);
      }
      return out;
    },
    dispose: () => {
      store = null;
    },
  };
}

export async function resolveLayer(request: LayerRequest): Promise<ResolvedLayer> {
  const { layerKey, planet, quality, source } = request;

  if (source.type === 'master') {
    const absPath = source.path;
    const { width, height } = await readMasterSize(absPath);
    if (width !== height) {
      throw new Error(`Master ${absPath}: must be square, got ${width}x${height}`);
    }
    if (!isPowerOfTwo(width) || width < TILE_SIZE) {
      throw new Error(`Master ${absPath}: size ${width} must be a power of two >= ${TILE_SIZE}`);
    }
    const mapPx = width;
    const baseZoom = Math.log2(mapPx / TILE_SIZE);
    return {
      layerKey,
      planet,
      quality,
      sourceType: 'master',
      metersPerPixel: null,
      mapPx,
      baseZoom,
      createGrid: () => createMasterGrid(absPath, mapPx, baseZoom),
    };
  }

  // Capture source: validate geometry up front (before touching the tiles).
  const mapPx = source.mapWidthMeters / source.metersPerPixel;
  if (!Number.isInteger(mapPx)) {
    throw new Error(
      `Capture layer "${layerKey}": mapPx = mapWidthMeters / metersPerPixel = ` +
        `${source.mapWidthMeters} / ${source.metersPerPixel} = ${mapPx} is not an integer`
    );
  }
  if (mapPx < TILE_SIZE) {
    throw new Error(`Capture layer "${layerKey}": mapPx ${mapPx} must be >= ${TILE_SIZE}`);
  }
  if (!isPowerOfTwo(mapPx)) {
    throw new Error(`Capture layer "${layerKey}": mapPx ${mapPx} must be a power of two`);
  }
  const baseZoom = Math.log2(mapPx / TILE_SIZE);

  return {
    layerKey,
    planet,
    quality,
    sourceType: 'capture',
    metersPerPixel: source.metersPerPixel,
    mapPx,
    baseZoom,
    createGrid: () => createCaptureGrid({ dir: source.dir, scene: source.scene, mapPx, baseZoom }),
  };
}
