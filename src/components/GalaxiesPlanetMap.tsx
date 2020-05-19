import React, { useState } from 'react';
import { TileLayer, Marker, Popup, Tooltip, AttributionControl } from 'react-leaflet';
import RasterCoords from 'leaflet-rastercoords';
import { PointTuple, LatLngBounds } from 'leaflet';

import { MapConfiguration } from '../data/maps';
import { Waypoint } from '../data/waypoints';

import RasterCoordsMap from './RasterCoordsMap';
import RasterViewContext from './contexts/RasterViewContext';
import WaypointIcons from './WaypointIcons';

import 'leaflet/dist/leaflet.css';

interface GalaxiesPlanetMapProps {
  map: MapConfiguration;
  waypoints: Waypoint[];
}

const GalaxiesPlanetMap: React.FC<GalaxiesPlanetMapProps> = ({ map, waypoints }) => {
  const [rasterCoordsInstance, setRasterCoordsInstance] = useState<null | InstanceType<typeof RasterCoords>>(null);

  if (!map.mapSize || !map.raster) return null;

  const galaxiesCoordsToRasterCoords = ([x, z]: PointTuple): PointTuple => {
    if (!map.mapSize || !map.raster) return [0, 0];

    return [
      x / (map.mapSize.width / map.raster.width) + map.raster.width / 2,
      -z / (map.mapSize.height / map.raster.height) + map.raster.height / 2,
    ];
  };

  return (
    <RasterViewContext.Provider value={{ rasterCoordsInstance, setRasterCoordsInstance }}>
      <RasterCoordsMap
        attributionControl={false}
        center={{
          lat: 0,
          lng: 0,
        }}
        zoom={2}
        maxZoom={7}
        minZoom={2}
        rasterCoordsInstance={rasterCoordsInstance}
        setRasterCoordsInstance={setRasterCoordsInstance}
      >
        <AttributionControl prefix={false} />
        {rasterCoordsInstance ? (
          <>
            <TileLayer
              url={`/tiles/${map.id}/{z}/{x}/{y}.png`}
              noWrap
              maxNativeZoom={4}
              bounds={
                new LatLngBounds(
                  rasterCoordsInstance.unproject([0, 0]),
                  rasterCoordsInstance.unproject([map.raster.width, map.raster.height])
                )
              }
              attribution={map.raster.attribution}
            />

            {waypoints.map(waypoint => (
              <Marker
                icon={WaypointIcons[waypoint.type]}
                key={`${waypoint.name}${waypoint.location[0]}${waypoint.location[2]}`}
                position={rasterCoordsInstance!.unproject(
                  galaxiesCoordsToRasterCoords([waypoint.location[0], waypoint.location[2]])
                )}
              >
                <Tooltip permanent direction="bottom" className="cityNameTooltip">
                  {waypoint.name}
                </Tooltip>
                {waypoint.description && <Popup>{waypoint.description}</Popup>}
              </Marker>
            ))}
          </>
        ) : null}
      </RasterCoordsMap>
    </RasterViewContext.Provider>
  );
};

export default GalaxiesPlanetMap;
