#!/usr/bin/env ts-node-script

/* eslint-disable no-console */
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

import rimraf from 'rimraf';

import mapConfigs from '../src/data/maps';

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

  for (let i = 0; i < mapConfigs.length; i++) {
    const map = mapConfigs[i];

    if (!map.raster) continue;

    const imagePath = path.join(process.cwd(), map.raster.sourceImage);
    const tileOutBasePath = path.join(process.cwd(), '/public/planets/tiles/', map.id);
    try {
      await asyncStat(imagePath);
    } catch {
      console.error(`Could not find ${imagePath}! Exiting.`);
      process.exit(1);
    }

    console.log(`Cleaning up old tiles for ${map.displayName}`);
    await asyncUnlink(tileOutBasePath);

    try {
      console.log(
        `Generating tiles for ${map.displayName} between zoom levels 0 and ${map.raster.maxZoom}. This could take a moment.`
      );
      await asyncExec(
        `python3 ${gdalPath} -l -p raster -w none -z 0-${map.raster.maxZoom} ${imagePath} ${tileOutBasePath}`
      );
      console.log(`Optimizing generated tiles for ${map.displayName}`);

      await asyncExec(
        `find ${tileOutBasePath} -name '*.png' -print0 | xargs -0 -P8 -L1 pngquant --ext .png --force 256`
      );
      console.log(`Tiles sucesfully generated for ${map.displayName}`);
    } catch (err) {
      console.error(`Failed to generate tiles for ${map.displayName}.`);
      console.error(err.message);
      process.exit(1);
    }
  }
}

generateTiles();

/* eslint-enable no-console */
