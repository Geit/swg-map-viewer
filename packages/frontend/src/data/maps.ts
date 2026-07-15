export interface TileSet {
  /** Stable id used to persist the user's tileset choice across planets (e.g. 'base', 'hd'). */
  id: string;
  /** Label shown in the tileset picker. Only surfaced when a planet has more than one tileset. */
  label: string;
  /** Path segment under planets/tiles/ that the {z}/{x}/{y} tiles live under. */
  path: string;
  format: 'png' | 'webp';
  maxNativeZoom: number;
  attribution: string;
  /**
   * Build-pipeline input: the master image generate-tiles.ts rasterises into this tileset, and the
   * pixel size of that image. Omitted for pre-baked tilesets (the HD capture layers are produced
   * separately by generate-capture-tiles.ts).
   */
  source?: {
    image: string;
    size: number;
  };
}

export interface MapConfiguration {
  id: string;
  waypointCommandId: string | false;
  displayName: string;
  planetMap: {
    size: number;
    offset: {
      x: number;
      z: number;
    };
  } | null;
  /**
   * Runtime-selectable tile layers. Entry [0] is the default/fallback used when the globally
   * selected tileset isn't available for this planet. Empty means the planet has no rendered map.
   */
  tileSets: readonly TileSet[];
  travelMapConfig: {
    labelPosition: 'top' | 'right';
    planetTexture: string;
    radius: number;
    x: number;
    y: number;
  } | null;
}

const DEFAULT_SWG_MAP_SIZE = 16_384;
const DEFAULT_RASTERIZED_MAP_SIZE = 4_096;
const SYTNERS_ATTRIBUTION = "Sytner's Satellite Maps 2.0";
const HD_CAPTURE_ATTRIBUTION = 'Omega HD Satellite Maps (2026)';

// The ten core planets share the same setup: a Sytner's base raster plus an HD capture layer.
const coreTileSets = (id: string): readonly TileSet[] => [
  {
    id: 'base',
    label: "Sytner's",
    path: id,
    format: 'png',
    maxNativeZoom: 4,
    attribution: SYTNERS_ATTRIBUTION,
    source: { image: `planets/lossless/map_${id}.png`, size: DEFAULT_RASTERIZED_MAP_SIZE },
  },
  {
    id: 'hd',
    label: 'HD Satellite',
    path: `${id}-hd`,
    format: 'webp',
    maxNativeZoom: 7,
    attribution: HD_CAPTURE_ATTRIBUTION,
  },
];

// A planet with a single base tileset rasterised from one source image (no HD capture layer).
// The label is never surfaced (the picker only shows for >1 tileset) so it mirrors the attribution.
const singleTileSet = (opts: {
  path: string;
  attribution: string;
  maxNativeZoom: number;
  image: string;
  size: number;
}): readonly TileSet[] => [
  {
    id: 'base',
    label: opts.attribution,
    path: opts.path,
    format: 'png',
    maxNativeZoom: opts.maxNativeZoom,
    attribution: opts.attribution,
    source: { image: opts.image, size: opts.size },
  },
];

const mapConfigs: readonly MapConfiguration[] = [
  {
    id: 'corellia',
    waypointCommandId: 'corellia',
    displayName: 'Corellia',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: coreTileSets('corellia'),
    travelMapConfig: {
      labelPosition: 'right',
      planetTexture: '/textures/ui_planet_sel_corl.png',
      x: 576,
      y: 405,
      radius: 46,
    },
  },
  {
    id: 'dantooine',
    waypointCommandId: 'dantooine',
    displayName: 'Dantooine',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: coreTileSets('dantooine'),
    travelMapConfig: {
      labelPosition: 'top',
      planetTexture: '/textures/ui_planet_sel_dant.png',
      x: 210,
      y: 177,
      radius: 23,
    },
  },
  {
    id: 'dathomir',
    waypointCommandId: 'dathomir',
    displayName: 'Dathomir',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: coreTileSets('dathomir'),
    travelMapConfig: {
      labelPosition: 'top',
      planetTexture: '/textures/ui_planet_sel_dath.png',
      x: 752,
      y: 149,
      radius: 30,
    },
  },
  {
    id: 'endor',
    waypointCommandId: 'endor',
    displayName: 'Endor',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: coreTileSets('endor'),
    travelMapConfig: {
      labelPosition: 'right',
      planetTexture: '/textures/ui_planet_sel_endo.png',
      x: 108,
      y: 704,
      radius: 27,
    },
  },
  {
    id: 'lok',
    waypointCommandId: 'lok',
    displayName: 'Lok',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: coreTileSets('lok'),
    travelMapConfig: {
      labelPosition: 'right',
      planetTexture: '/textures/ui_planet_sel_lok.png',
      x: 720,
      y: 919,
      radius: 20,
    },
  },
  {
    id: 'naboo',
    waypointCommandId: 'naboo',
    displayName: 'Naboo',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    // naboo's hd layer moves to maxNativeZoom 8 once the 0.25 m/px scan is retiled
    tileSets: coreTileSets('naboo'),
    travelMapConfig: {
      labelPosition: 'right',
      planetTexture: '/textures/ui_planet_sel_nboo.png',
      x: 468,
      y: 792,
      radius: 37,
    },
  },
  {
    id: 'rori',
    waypointCommandId: 'rori',
    displayName: 'Rori',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: coreTileSets('rori'),
    travelMapConfig: {
      labelPosition: 'right',
      planetTexture: '/textures/ui_planet_sel_rori.png',
      x: 504,
      y: 865,
      radius: 13,
    },
  },
  {
    id: 'talus',
    waypointCommandId: 'talus',
    displayName: 'Talus',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: coreTileSets('talus'),
    travelMapConfig: {
      labelPosition: 'top',
      planetTexture: '/textures/ui_planet_sel_talu.png',
      x: 521,
      y: 272,
      radius: 23,
    },
  },
  {
    id: 'tatooine',
    waypointCommandId: 'tatooine',
    displayName: 'Tatooine',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: coreTileSets('tatooine'),
    travelMapConfig: {
      labelPosition: 'right',
      planetTexture: '/textures/ui_planet_sel_tatt.png',
      x: 756,
      y: 835,
      radius: 26,
    },
  },
  {
    id: 'yavin4',
    waypointCommandId: 'yavin4',
    displayName: 'Yavin 4',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: coreTileSets('yavin4'),
    travelMapConfig: {
      labelPosition: 'top',
      planetTexture: '/textures/ui_planet_sel_yavi.png',
      x: 920,
      y: 205,
      radius: 35,
    },
  },
  {
    id: 'mustafar',
    waypointCommandId: 'mustafar',
    displayName: 'Mustafar',
    planetMap: { size: 8192, offset: { x: 0, z: 0 } },
    tileSets: singleTileSet({
      path: 'mustafar',
      attribution: 'SWG Game Files',
      maxNativeZoom: 2,
      image: 'planets/lossless/map_mustafar.png',
      size: 1024,
    }),
    travelMapConfig: {
      labelPosition: 'top',
      planetTexture: '/textures/ui_planet_sel_must.png',
      x: 222,
      y: 373,
      radius: 41,
    },
  },
  {
    id: 'kashyyyk',
    waypointCommandId: 'kachirho',
    displayName: 'Kashyyyk',
    planetMap: {
      size: 2048,
      offset: { x: 0, z: 112 },
    },
    tileSets: singleTileSet({
      path: 'kashyyyk',
      attribution: 'SWG Game Files',
      maxNativeZoom: 2,
      image: 'planets/lossless/map_kashyyyk_main.png',
      size: 1024,
    }),
    travelMapConfig: {
      labelPosition: 'top',
      planetTexture: '/textures/ui_planet_sel_kash.png',
      x: 466,
      y: 137,
      radius: 38,
    },
  },
  {
    id: 'kashyyyk_dead_forest',
    waypointCommandId: 'khowir',
    displayName: 'Kashyyyk - Kkowir Forest',
    planetMap: {
      size: 1000,
      offset: { x: 0, z: 0 },
    },
    tileSets: singleTileSet({
      path: 'kashyyyk_dead_forest',
      attribution: 'SWG Game Files',
      maxNativeZoom: 2,
      image: 'planets/lossless/map_kashyyyk_dead_forest.png',
      size: 1024,
    }),
    travelMapConfig: null,
  },
  {
    id: 'kashyyyk_hunting',
    waypointCommandId: 'etyyy',
    displayName: 'Kashyyyk - Etyyy Hunting Grounds',
    planetMap: {
      size: 2844,
      offset: { x: 0, z: 0 },
    },
    tileSets: singleTileSet({
      path: 'kashyyyk_hunting',
      attribution: 'SWG Game Files',
      maxNativeZoom: 2,
      image: 'planets/lossless/map_kashyyyk_hunting.png',
      size: 1024,
    }),
    travelMapConfig: null,
  },
  // The Rryatt trail is weird - It has multiple different coordinate systems for each of the different levels
  // It is not possible to make a waypoint for a given level unless the PC is already within that level.
  // It should at the very least be possible to put points on the map for it, but that can be an excercise for a
  // future iteration.
  // dsrc/sku.0/sys.shared/compiled/game/datatables/buildout/areas_kashyyyk_rryatt_trail.tab may hold clues useful
  // for implementation.
  {
    id: 'kashyyyk_rryatt_trail',
    waypointCommandId: false,
    displayName: 'Kashyyyk - Rryatt Trail',
    planetMap: {
      size: 2048,
      offset: { x: -0, z: 0 },
    },
    tileSets: singleTileSet({
      path: 'kashyyyk_rryatt_trail',
      attribution: 'SWG Game Files',
      maxNativeZoom: 2,
      image: 'planets/lossless/map_kashyyyk_rryatt_trail.png',
      size: 1024,
    }),
    travelMapConfig: null,
  },
  // {
  //   id: 'map_kashyyyk_south_dungeons_bocctyyy',
  //   waypointCommandId: false,
  //   displayName: 'Kashyyyk - Bocctyyy Hunting Grounds',
  //   planetMap: {
  //     size: 512,
  //     offset: { x: 0, z: 0 },
  //   },
  //   tileSets: [
  //     {
  //       id: 'base',
  //       label: 'SWG Game Files',
  //       path: 'map_kashyyyk_south_dungeons_bocctyyy',
  //       format: 'png',
  //       maxNativeZoom: 2,
  //       attribution: 'SWG Game Files',
  //       source: { image: 'planets/lossless/map_kashyyyk_south_dungeons_bocctyyy.png', size: 1024 },
  //     },
  //   ],
  //   travelMapConfig: null,
  // },
  // {
  //   id: 'map_kashyyyk_south_dungeons_hracca',
  //   waypointCommandId: false,
  //   displayName: 'Kashyyyk - Hracca Glade',
  //   planetMap: {
  //     size: 1024,
  //     offset: { x: 0, z: 0 },
  //   },
  //   tileSets: [
  //     {
  //       id: 'base',
  //       label: 'SWG Game Files',
  //       path: 'map_kashyyyk_south_dungeons_hracca',
  //       format: 'png',
  //       maxNativeZoom: 2,
  //       attribution: 'SWG Game Files',
  //       source: { image: 'planets/lossless/map_kashyyyk_south_dungeons_hracca.png', size: 1024 },
  //     },
  //   ],
  //   travelMapConfig: null,
  // },
  {
    id: 'ord_mantell',
    waypointCommandId: false,
    displayName: 'Ord Mantell',
    planetMap: null,
    tileSets: [],
    travelMapConfig: {
      labelPosition: 'right',
      planetTexture: '/textures/ui_planet_sel_ordmantel.png',
      x: 641,
      y: 223,
      radius: 35,
    },
  },
  {
    id: 'bespin',
    waypointCommandId: 'bespin',
    displayName: 'Bespin',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    tileSets: singleTileSet({
      path: 'bespin',
      attribution: 'SWG Legends',
      maxNativeZoom: 5,
      image: 'planets/lossless/map_bespin_full.png',
      size: 16384,
    }),
    travelMapConfig: {
      labelPosition: 'top',
      planetTexture: '/textures/ui_planet_sel_besp.png',
      x: 250,
      y: 850,
      radius: 40,
    },
  },
] as const;

export const resolveTileSet = (map: MapConfiguration, tileSetId: string): TileSet | undefined =>
  map.tileSets.find(tileSet => tileSet.id === tileSetId) ?? map.tileSets[0];

export default mapConfigs;
