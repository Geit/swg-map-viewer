#!/usr/bin/env ts-node-script

/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

import { buildPyramid } from './retile/pyramid';
import { DEFAULT_QUALITY, LayerSource, resolveLayer } from './retile/sources';

// The tile tree is a repo artifact, so the output stays anchored to the repo; every input is an arg.
const TILES_BASE = path.resolve(__dirname, '../packages/tile-server/planets/tiles');

const DEFAULT_METERS_PER_PIXEL = 0.5;
const DEFAULT_MAP_WIDTH_METERS = 16384;

const USAGE = `Usage: generate-capture-tiles <layerKey> <source> [options]

  <layerKey>  Output tileset name, e.g. lok-hd (written to <tiles>/<layerKey>).
  <source>    A directory of planetMap_<scene>_<NNNN>.tga capture tiles,
              or a single square, power-of-two master .png.

Capture-only options:
  --scene <name>        Capture scene name       (default: layerKey without -hd)
  --mpp <metres>        Metres per pixel         (default: ${DEFAULT_METERS_PER_PIXEL})
  --map-width <metres>  Map width in metres      (default: ${DEFAULT_MAP_WIDTH_METERS})

All sources:
  --planet <name>       Planet id for manifest   (default: layerKey without -hd)
  --quality <1-100>     WebP quality             (default: ${DEFAULT_QUALITY})`;

function parseArgs(argv: string[]): { positionals: string[]; flags: Map<string, string> } {
  const positionals: string[] = [];
  const flags = new Map<string, string>();
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) {
      positionals.push(arg);
      continue;
    }
    const eq = arg.indexOf('=');
    if (eq !== -1) {
      flags.set(arg.slice(2, eq), arg.slice(eq + 1));
    } else {
      i += 1;
      flags.set(arg.slice(2), argv[i] ?? '');
    }
  }
  return { positionals, flags };
}

function numberFlag(flags: Map<string, string>, name: string, fallback: number): number {
  const raw = flags.get(name);
  if (raw === undefined) return fallback;
  const value = Number(raw);
  if (!Number.isFinite(value)) {
    throw new Error(`--${name} must be a number, got "${raw}"`);
  }
  return value;
}

async function main(): Promise<void> {
  const { positionals, flags } = parseArgs(process.argv.slice(2));
  const [layerKey, sourceArg] = positionals;
  if (!layerKey || !sourceArg) {
    console.error(USAGE);
    process.exit(1);
  }

  const defaultName = layerKey.replace(/-hd$/, '');
  const planet = flags.get('planet') ?? defaultName;
  const quality = numberFlag(flags, 'quality', DEFAULT_QUALITY);

  const sourcePath = path.resolve(sourceArg);
  let stat: fs.Stats;
  try {
    stat = await fs.promises.stat(sourcePath);
  } catch {
    throw new Error(`Source not found: ${sourcePath}`);
  }

  // A file is a master PNG; a directory is a capture-tile set.
  const source: LayerSource = stat.isFile()
    ? { type: 'master', path: sourcePath }
    : {
        type: 'capture',
        dir: sourcePath,
        scene: flags.get('scene') ?? defaultName,
        metersPerPixel: numberFlag(flags, 'mpp', DEFAULT_METERS_PER_PIXEL),
        mapWidthMeters: numberFlag(flags, 'map-width', DEFAULT_MAP_WIDTH_METERS),
      };

  const started = Date.now();
  const resolved = await resolveLayer({ layerKey, planet, quality, source });
  const outDir = path.join(TILES_BASE, layerKey);

  console.log(
    `[${layerKey}] planet=${resolved.planet} type=${resolved.sourceType} ` +
      `mapPx=${resolved.mapPx} baseZoom=${resolved.baseZoom} quality=${resolved.quality}`
  );
  // Validate the source (createGrid fails loudly on an incomplete or corrupt capture set) BEFORE
  // cleaning, so a bad source cannot destroy the previous good tileset.
  const grid = await resolved.createGrid();

  console.log(`[${layerKey}] Cleaning ${outDir}`);
  await fs.promises.rm(outDir, { recursive: true, force: true });
  await fs.promises.mkdir(outDir, { recursive: true });
  const tileCount = await buildPyramid(grid, outDir, resolved.quality, message =>
    console.log(`[${layerKey}] ${message}`)
  );

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
  console.log(`[${layerKey}] Done: ${tileCount} tiles in ${elapsed}s -> ${outDir}`);
}

main().catch((err: unknown) => {
  console.error(`\nERROR: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});

/* eslint-enable no-console */
