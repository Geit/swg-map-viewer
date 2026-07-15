// Production origin that serves the pre-generated tile pyramids. Shared by the runtime tile layer
// (GalaxiesPlanetMap) and the dev server's tile-proxy fallback (vite.config) so the two can't drift.
export const PROD_TILE_HOST = 'https://swg-map-viewer.geit.uk';
