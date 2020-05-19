export interface MapConfiguration {
  id: string;
  displayName: string;
  mapSize: {
    height: number;
    width: number;
  } | null;
  raster: {
    attribution: string;
    height: number;
    width: number;
  } | null;
  travelMapConfig: {
    labelPosition: 'top' | 'right';
    planetTexture: string;
    radius: number;
    x: number;
    y: number;
  };
}

const DEFAULT_SWG_MAP_SIZE = 16_384;
const DEFAULT_RASTERIZED_MAP_SIZE = 4_096;

const mapConfigs: readonly MapConfiguration[] = [
  {
    id: 'corellia',
    displayName: 'Corellia',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Dantooine',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Dathomir',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Endor',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Lok',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Naboo',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Rori',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Talus',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Tatooine',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Yavin 4',
    mapSize: {
      width: DEFAULT_SWG_MAP_SIZE,
      height: DEFAULT_SWG_MAP_SIZE,
    },
    raster: {
      attribution: "Sytner's Satellite Maps 2.0",
      height: DEFAULT_RASTERIZED_MAP_SIZE,
      width: DEFAULT_RASTERIZED_MAP_SIZE,
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
    displayName: 'Mustafar',
    mapSize: null,
    raster: null,
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
    displayName: 'Kashyyyk',
    mapSize: null,
    raster: null,
    travelMapConfig: {
      labelPosition: 'top',
      planetTexture: '/textures/ui_planet_sel_kash.png',
      x: 466,
      y: 137,
      radius: 38,
    },
  },
  {
    id: 'ord_mantell',
    displayName: 'Ord Mantell',
    mapSize: null,
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
