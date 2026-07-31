#!/usr/bin/env ts-node-script

/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

import mapConfigs from '../packages/frontend/src/data/maps';

import { numberFlag, parseArgs } from './cli-args';
import { buildLayer } from './retile/build';
import { readDdsInfo } from './retile/dds';
import { DEFAULT_QUALITY } from './retile/sources';
import { TILE_SIZE } from './retile/types';

// Retiles the client's own map art (texture/ui_map_<scene>.dds) into the 'game' tileset each map
// declares in maps.ts. The DDS files ship with the client, not this repo, so the texture directory
// is an input.

const DEFAULT_TEXTURE_DIR = '/mnt/c/Code/clientside/texture';

// maps.ts id -> client texture basename; the two names diverge (kashyyyk -> ui_map_kashyyyk_main).
const GAME_MAP_TEXTURES: Record<string, string> = {
  corellia: 'ui_map_corellia.dds',
  dantooine: 'ui_map_dantooine.dds',
  dathomir: 'ui_map_dathomir.dds',
  endor: 'ui_map_endor.dds',
  lok: 'ui_map_lok.dds',
  naboo: 'ui_map_naboo.dds',
  rori: 'ui_map_rori.dds',
  talus: 'ui_map_talus.dds',
  tatooine: 'ui_map_tatooine.dds',
  yavin4: 'ui_map_yavin4.dds',
  bespin: 'ui_map_bespin.dds',
};

const USAGE = `Usage: generate-game-tiles [mapId ...] [options]

  mapId       Restrict the run to these maps.ts ids (default: every map with a 'game' tileset).

Options:
  --texture-dir <path>  Extracted client texture directory (default: ${DEFAULT_TEXTURE_DIR})
  --quality <1-100>     WebP quality (default: ${DEFAULT_QUALITY})`;

interface GameLayer {
  mapId: string;
  layerKey: string;
  texture: string;
  maxNativeZoom: number;
}

// Pair every 'game' tileset in maps.ts with its texture, failing on drift in either direction.
function collectGameLayers(): GameLayer[] {
  const layers: GameLayer[] = [];
  const unmatched = new Set(Object.keys(GAME_MAP_TEXTURES));

  for (const map of mapConfigs) {
    const tileSet = map.tileSets.find(({ id }) => id === 'game');
    if (!tileSet) continue;

    const texture = GAME_MAP_TEXTURES[map.id];
    if (!texture) {
      throw new Error(`maps.ts declares a 'game' tileset for "${map.id}" with no entry in GAME_MAP_TEXTURES`);
    }
    unmatched.delete(map.id);
    layers.push({ mapId: map.id, layerKey: tileSet.path, texture, maxNativeZoom: tileSet.maxNativeZoom });
  }

  if (unmatched.size > 0) {
    throw new Error(`GAME_MAP_TEXTURES lists maps with no 'game' tileset in maps.ts: ${[...unmatched].join(', ')}`);
  }
  return layers;
}

// A source shallower than maps.ts claims would leave the frontend requesting tiles at a zoom that
// was never written.
async function validateSource(layer: GameLayer, sourcePath: string): Promise<void> {
  const info = await readDdsInfo(sourcePath).catch((err: unknown) => {
    throw new Error(`${layer.mapId}: cannot read ${sourcePath}: ${err instanceof Error ? err.message : String(err)}`);
  });
  const expected = TILE_SIZE * 2 ** layer.maxNativeZoom;
  if (info.width !== expected || info.height !== expected) {
    throw new Error(
      `${layer.mapId}: ${path.basename(sourcePath)} is ${info.width}x${info.height}, but maps.ts declares ` +
        `maxNativeZoom ${layer.maxNativeZoom} (expects ${expected}x${expected})`
    );
  }
}

async function main(): Promise<void> {
  const { positionals, flags } = parseArgs(process.argv.slice(2));
  if (flags.has('help')) {
    console.log(USAGE);
    return;
  }

  const textureDir = path.resolve(flags.get('texture-dir') ?? process.env.SWG_TEXTURE_DIR ?? DEFAULT_TEXTURE_DIR);
  const quality = numberFlag(flags, 'quality', DEFAULT_QUALITY);

  if (!(await fs.promises.stat(textureDir).catch(() => null))?.isDirectory()) {
    throw new Error(`Texture directory not found: ${textureDir}\n\n${USAGE}`);
  }

  const allLayers = collectGameLayers();
  const requested = new Set(positionals);
  const unknown = [...requested].filter(id => !allLayers.some(layer => layer.mapId === id));
  if (unknown.length > 0) {
    throw new Error(`No 'game' tileset for: ${unknown.join(', ')}\n\n${USAGE}`);
  }
  const layers = requested.size > 0 ? allLayers.filter(layer => requested.has(layer.mapId)) : allLayers;

  // Validate every source before replacing any tileset on disk.
  const sources = layers.map(layer => path.join(textureDir, layer.texture));
  await Promise.all(layers.map((layer, i) => validateSource(layer, sources[i])));

  console.log(`Retiling ${layers.length} game tileset(s) from ${textureDir}`);
  for (const [i, layer] of layers.entries()) {
    await buildLayer(
      {
        layerKey: layer.layerKey,
        planet: layer.mapId,
        quality,
        source: { type: 'master', path: sources[i] },
      },
      message => console.log(message)
    );
  }
}

main().catch((err: unknown) => {
  console.error(`\nERROR: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});

/* eslint-enable no-console */
