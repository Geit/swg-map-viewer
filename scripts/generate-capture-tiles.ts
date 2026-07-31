#!/usr/bin/env ts-node-script

/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

import { numberFlag, parseArgs } from './cli-args';
import { buildLayer } from './retile/build';
import { DEFAULT_QUALITY, LayerSource } from './retile/sources';

const DEFAULT_METERS_PER_PIXEL = 0.5;
const DEFAULT_MAP_WIDTH_METERS = 16384;

const USAGE = `Usage: generate-capture-tiles <layerKey> <source> [options]

  <layerKey>  Output tileset name, e.g. lok-hd (written to <tiles>/<layerKey>).
  <source>    A directory of planetMap_<scene>_<NNNN>.tga capture tiles,
              or a single square, power-of-two master image (.png or .dds).

Capture-only options:
  --scene <name>        Capture scene name       (default: layerKey without -hd)
  --mpp <metres>        Metres per pixel         (default: ${DEFAULT_METERS_PER_PIXEL})
  --map-width <metres>  Map width in metres      (default: ${DEFAULT_MAP_WIDTH_METERS})

All sources:
  --planet <name>       Planet id for manifest   (default: layerKey without -hd)
  --quality <1-100>     WebP quality             (default: ${DEFAULT_QUALITY})`;

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

  // A file is a master image; a directory is a capture-tile set.
  const source: LayerSource = stat.isFile()
    ? { type: 'master', path: sourcePath }
    : {
        type: 'capture',
        dir: sourcePath,
        scene: flags.get('scene') ?? defaultName,
        metersPerPixel: numberFlag(flags, 'mpp', DEFAULT_METERS_PER_PIXEL),
        mapWidthMeters: numberFlag(flags, 'map-width', DEFAULT_MAP_WIDTH_METERS),
      };

  await buildLayer({ layerKey, planet, quality, source }, message => console.log(message));
}

main().catch((err: unknown) => {
  console.error(`\nERROR: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});

/* eslint-enable no-console */
