// The "build one tileset" step shared by the retiler drivers: resolve the layer, validate its
// source, replace the output tree, build the pyramid, and write the manifest.

import fs from 'fs';
import path from 'path';

import { buildPyramid } from './pyramid';
import { LayerRequest, resolveLayer } from './sources';

// The tile tree is a repo artifact, so the output stays anchored to the repo; every input is an arg.
export const TILES_BASE = path.resolve(__dirname, '../../packages/tile-server/planets/tiles');

export type Logger = (message: string) => void;

export async function buildLayer(request: LayerRequest, log: Logger): Promise<number> {
  const { layerKey } = request;
  const started = Date.now();
  const resolved = await resolveLayer(request);
  const outDir = path.join(TILES_BASE, layerKey);

  log(
    `[${layerKey}] planet=${resolved.planet} type=${resolved.sourceType} ` +
      `mapPx=${resolved.mapPx} baseZoom=${resolved.baseZoom} quality=${resolved.quality}`
  );
  // Validate the source (createGrid fails loudly on an incomplete or corrupt capture set) BEFORE
  // cleaning, so a bad source cannot destroy the previous good tileset.
  const grid = await resolved.createGrid();

  log(`[${layerKey}] Cleaning ${outDir}`);
  await fs.promises.rm(outDir, { recursive: true, force: true });
  await fs.promises.mkdir(outDir, { recursive: true });
  const tileCount = await buildPyramid(grid, outDir, resolved.quality, message => log(`[${layerKey}] ${message}`));

  const manifest = {
    planet: resolved.planet,
    layerKey,
    sourceType: resolved.sourceType,
    ...(resolved.sourceType === 'capture' ? { metersPerPixel: resolved.metersPerPixel } : {}),
    mapPx: resolved.mapPx,
    baseZoom: resolved.baseZoom,
    quality: resolved.quality,
    tileCount,
    generatedAt: new Date().toISOString(),
  };
  await fs.promises.writeFile(path.join(outDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);

  const elapsed = ((Date.now() - started) / 1000).toFixed(1);
  log(`[${layerKey}] Done: ${tileCount} tiles in ${elapsed}s -> ${outDir}`);
  return tileCount;
}
