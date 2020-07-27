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
  raster: {
    maxZoom: number;
    sourceImage: string;
    attribution: string;
    size: number;
  } | null;
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

const mapConfigs: readonly MapConfiguration[] = [
  {
    id: 'corellia',
    waypointCommandId: 'corellia',
    displayName: 'Corellia',
    planetMap: { size: DEFAULT_SWG_MAP_SIZE, offset: { x: 0, z: 0 } },
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_corellia.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_dantooine.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_dathomir.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_endor.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_lok.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_naboo.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_rori.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_talus.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_tatooine.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 4,
      sourceImage: 'planets/lossless/map_yavin4.png',
      attribution: "Sytner's Satellite Maps 2.0",
      size: DEFAULT_RASTERIZED_MAP_SIZE,
    },
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
    raster: {
      maxZoom: 2,
      sourceImage: 'planets/lossless/map_mustafar.png',
      attribution: 'SWG Game Files',
      size: 1024,
    },
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
    raster: {
      maxZoom: 2,
      sourceImage: 'planets/lossless/map_kashyyyk_main.png',
      attribution: 'SWG Game Files',
      size: 1024,
    },
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
    raster: {
      maxZoom: 2,
      sourceImage: 'planets/lossless/map_kashyyyk_dead_forest.png',
      attribution: 'SWG Game Files',
      size: 1024,
    },
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
    raster: {
      maxZoom: 2,
      sourceImage: 'planets/lossless/map_kashyyyk_hunting.png',
      attribution: 'SWG Game Files',
      size: 1024,
    },
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
    raster: {
      maxZoom: 2,
      sourceImage: 'planets/lossless/map_kashyyyk_rryatt_trail.png',
      attribution: 'SWG Game Files',
      size: 1024,
    },
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
  //   raster: {
  //     maxZoom: 2,
  //     sourceImage: 'planets/lossless/map_kashyyyk_south_dungeons_bocctyyy.png',
  //     attribution: 'SWG Game Files',
  //     size: 1024,
  //   },
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
  //   raster: {
  //     maxZoom: 2,
  //     sourceImage: 'planets/lossless/map_kashyyyk_south_dungeons_hracca.png',
  //     attribution: 'SWG Game Files',
  //     size: 1024,
  //   },
  //   travelMapConfig: null,
  // },
  {
    id: 'ord_mantell',
    waypointCommandId: false,
    displayName: 'Ord Mantell',
    planetMap: null,
    raster: null,
    travelMapConfig: {
      labelPosition: 'right',
      planetTexture: '/textures/ui_planet_sel_ordmantel.png',
      x: 641,
      y: 223,
      radius: 35,
    },
  },
] as const;

export default mapConfigs;
