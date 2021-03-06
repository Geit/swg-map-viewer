import React, { useEffect, useState } from 'react';
import { TileLayer, AttributionControl, MapContainer } from '@monsonjeremy/react-leaflet';
import { LatLngBounds, CRS, Util, Transformation, Map } from 'leaflet';

import { MapConfiguration } from '../data/maps';
import { Waypoint } from '../data/waypoints';

import waypointRenderConfiguration from './waypointRenderConfiguration';

interface GalaxiesPlanetMapProps {
  map: MapConfiguration;
  waypoints: Waypoint[];
}

const USE_INSIDE_BOUNDS = true;

const GalaxiesPlanetMap: React.FC<GalaxiesPlanetMapProps> = ({ map, waypoints }) => {
  const [mapState, setMapState] = useState<Map | null>(null);
  useEffect(() => {
    if (!mapState || !map.planetMap) return;

    const bounds = new LatLngBounds(
      [map.planetMap.size / 2, -map.planetMap.size / 2],
      [-map.planetMap.size / 2, map.planetMap.size / 2]
    );

    // mapRef is now available and useEffect is only called once on component update
    mapState.fitBounds(bounds, { animate: false });

    const minZoomLevel = mapState.getBoundsZoom(bounds, USE_INSIDE_BOUNDS);

    setTimeout(() => mapState.setMinZoom(minZoomLevel), 10);
    setTimeout(() => mapState.invalidateSize(), 100);
  }, [mapState, map.planetMap]);

  if (!map.planetMap || !map.raster) return null;

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

  return (
    <MapContainer
      zoomSnap={0}
      key={map.planetMap.size}
      attributionControl={false}
      center={[0, 0]}
      zoom={1}
      maxZoom={7}
      minZoom={1}
      crs={CRSForMap}
      maxBounds={bounds}
      maxBoundsViscosity={1}
      whenCreated={setMapState}
      onresize={() => {
        if (!mapState) return;

        mapState.setMinZoom(0);
        const minZoomLevel = mapState.getBoundsZoom(bounds, USE_INSIDE_BOUNDS);
        if (typeof minZoomLevel === 'number') {
          mapState.setMinZoom(minZoomLevel);
        }
      }}
    >
      <AttributionControl prefix={false} />

      <TileLayer
        url={`https://swg-map-viewer.geit.uk/planets/tiles/${map.id}/{z}/{x}/{y}.png`}
        noWrap
        maxNativeZoom={map.raster.maxZoom}
        bounds={bounds}
        attribution={map.raster.attribution}
        keepBuffer={3}
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
