import React, { useCallback } from 'react';
import { TileLayer, AttributionControl, MapContainer } from 'react-leaflet';
import { LatLngBounds, CRS, Util, Transformation, Map } from 'leaflet';
import { useAtomValue } from 'jotai';

import { MapConfiguration, resolveTileSet } from '../data/maps';
import { PROD_TILE_HOST } from '../data/tileHost';
import { Waypoint } from '../data/waypoints';
import { currentTileSetAtom } from '../atoms/waypoints';

import waypointRenderConfiguration from './waypointRenderConfiguration';

interface GalaxiesPlanetMapProps {
  map: MapConfiguration;
  waypoints: Waypoint[];
}

const USE_INSIDE_BOUNDS = true;

// In dev the vite server serves /planets/* from packages/tile-server (with production as the
// fallback for tiles not on disk), so freshly generated tilesets are visible before deploying.
const TILE_HOST = import.meta.env.DEV ? '' : PROD_TILE_HOST;

const GalaxiesPlanetMap: React.FC<GalaxiesPlanetMapProps> = ({ map, waypoints }) => {
  const tileSet = useAtomValue(currentTileSetAtom);
  const mapStateRefCb = useCallback(
    (mapState: Map) => {
      if (!mapState || !map.planetMap) return;

      const bounds = new LatLngBounds(
        [map.planetMap.size / 2, -map.planetMap.size / 2],
        [-map.planetMap.size / 2, map.planetMap.size / 2]
      );

      // mapRef is now available and useEffect is only called once on component update
      mapState.fitBounds(bounds, { animate: false });

      let minZoomLevel = mapState.getBoundsZoom(bounds, USE_INSIDE_BOUNDS);

      mapState.on('resize', () => {
        if (!mapState) return;

        mapState.setMinZoom(0);
        minZoomLevel = mapState.getBoundsZoom(bounds, USE_INSIDE_BOUNDS);
        if (typeof minZoomLevel === 'number') {
          mapState.setMinZoom(minZoomLevel);
        }
      });

      setTimeout(() => mapState.setMinZoom(minZoomLevel), 10);
      setTimeout(() => mapState.invalidateSize(), 100);
    },
    [map]
  );

  const activeTileSet = resolveTileSet(map, tileSet);
  if (!map.planetMap || !activeTileSet) return null;

  const scaleFactor = (map.planetMap.size / 1_024) * 4;

  const CRSForMap = Util.extend({}, CRS.Simple, {
    transformation: new Transformation(
      1 / scaleFactor,
      (map.planetMap.size + map.planetMap.offset.x * 2) / 2 / scaleFactor,
      -1 / scaleFactor,
      (map.planetMap.size + map.planetMap.offset.z * 2) / 2 / scaleFactor
    ),
  });

  const bounds = new LatLngBounds(
    [map.planetMap.size / 2, -map.planetMap.size / 2],
    [-map.planetMap.size / 2, map.planetMap.size / 2]
  );

  // Zoom past the deepest native tileset is left to Leaflet's upscaling; the container always
  // allows at least zoom 7 so HD detail is reachable.
  const maxNativeZoom = Math.max(...map.tileSets.map(({ maxNativeZoom: zoom }) => zoom));

  const tileUrl = `${TILE_HOST}/planets/tiles/${activeTileSet.path}/{z}/{x}/{y}.${activeTileSet.format}`;

  return (
    <MapContainer
      key={map.displayName}
      attributionControl={false}
      center={[0, 0]}
      zoom={1}
      maxZoom={Math.max(7, maxNativeZoom)}
      minZoom={1}
      crs={CRSForMap}
      maxBounds={bounds}
      maxBoundsViscosity={1}
      ref={mapStateRefCb}
    >
      <AttributionControl prefix={false} />

      {/* Coarse whole-planet base (native zoom 1) kept under the sharp layer to fill gaps while
          it loads. ~4 tiles; only the in-view one loads. */}
      <TileLayer
        key={`${map.id}-${activeTileSet.id}-base`}
        url={tileUrl}
        noWrap
        minNativeZoom={0}
        maxNativeZoom={1}
        bounds={bounds}
        zIndex={0}
        updateWhenZooming={false}
      />

      <TileLayer
        // Leaflet keys the layer per tileset so switching remounts it rather than swapping URLs.
        key={`${map.id}-${activeTileSet.id}`}
        url={tileUrl}
        noWrap
        maxNativeZoom={activeTileSet.maxNativeZoom}
        bounds={bounds}
        attribution={activeTileSet.attribution}
        keepBuffer={3}
        zIndex={1}
        updateWhenZooming={false}
      />

      {waypoints.map(waypoint => {
        const WaypointComponent = waypointRenderConfiguration[waypoint.type];
        return (
          <WaypointComponent
            key={`${waypoint.name}${waypoint.location[0]}${waypoint.location[2]}`}
            waypoint={waypoint}
            map={map}
          />
        );
      })}
    </MapContainer>
  );
};

export default GalaxiesPlanetMap;
