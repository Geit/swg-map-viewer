#!/usr/bin/env ts-node-script

/* eslint-disable no-console */
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

import rimraf from 'rimraf';

import mapConfigs from '../packages/frontend/src/data/maps';

const MAP_BASE_PATH = path.join(process.cwd(), '/packages/tile-server');

const asyncExec = promisify(exec);
const asyncStat = promisify(fs.stat);
const asyncUnlink = promisify(rimraf);

async function generateTiles() {
  const gdalPath = path.join(process.cwd(), '../gdal2tiles-leaflet/gdal2tiles.py');

  try {
    await asyncStat(gdalPath);
  } catch {
    console.error('Please ensure gdal2tiles-leaflet is located in a sibling directory!');
    process.exit(1);
  }

  for (const map of mapConfigs) {
    for (const tileSet of map.tileSets) {
      // Only tilesets with a source image are rasterised here; pre-baked ones (HD capture layers)
      // are produced by generate-capture-tiles.ts.
      const { source } = tileSet;
      if (!source) continue;

      const label = `${map.displayName} (${tileSet.label})`;
      const imagePath = path.join(MAP_BASE_PATH, source.image);
      const tileOutBasePath = path.join(MAP_BASE_PATH, '/planets/tiles/', tileSet.path);
      try {
        await asyncStat(imagePath);
      } catch {
        console.error(`Could not find ${imagePath}! Exiting.`);
        process.exit(1);
      }

      console.log(`Cleaning up old tiles for ${label}`);
      await asyncUnlink(tileOutBasePath);

      try {
        console.log(
          `Generating tiles for ${label} between zoom levels 0 and ${tileSet.maxNativeZoom}. This could take a moment.`
        );
        await asyncExec(
          `python3 ${gdalPath} -l -p raster -w none -z 0-${tileSet.maxNativeZoom} ${imagePath} ${tileOutBasePath}`
        );

        if (!process.env.DISABLE_OPTIMIZATION) {
          console.log(`Optimizing generated tiles for ${label}`);

          await asyncExec(
            `find ${tileOutBasePath} -name '*.png' -print0 | xargs -0 -P8 -L1 pngquant --ext .png --force 256`
          );
        }

        console.log(`Tiles sucesfully generated for ${label}`);
      } catch (err) {
        console.error(`Failed to generate tiles for ${label}.`);
        console.error(err instanceof Error ? err.message : String(err));
        process.exit(1);
      }
    }
  }
}

generateTiles();

/* eslint-enable no-console */
