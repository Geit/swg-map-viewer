import React, { useState } from 'react';
import { Icon } from 'leaflet';
import { Tooltip, Popup, Marker, Circle } from 'react-leaflet';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button } from '@material-ui/core';

import { WaypointType } from '../enums';
import { Waypoint } from '../data/waypoints';
import { MapConfiguration } from '../data/maps';

interface WaypointMarkerRenderProps {
  waypoint: Waypoint;
  map: MapConfiguration;
  icon?: Icon;
}

interface WaypointRenderConfiguration {
  icon: Icon;
  TooltipComponent: React.FC<WaypointMarkerRenderProps>;
  PopupComponent: React.FC<WaypointMarkerRenderProps>;
  generateWaypoint: (waypoint: Waypoint, map: MapConfiguration) => string;
}

const GenericWaypointTooltip: React.FC<WaypointMarkerRenderProps> = ({ waypoint }) => (
  <Tooltip permanent direction="bottom" className="markerTooltip">
    {waypoint.name}
  </Tooltip>
);

const GenericWaypointPopup: React.FC<WaypointMarkerRenderProps> = ({ waypoint, map }) => (
  <Popup>
    <h3>
      {waypoint.name} &mdash; {waypoint.location.join(',')}
    </h3>
    {waypoint.description}

    <CopyToClipboard text={waypointGenerator(waypoint.name, waypoint.location, map)}>
      <Button color="primary">Copy as Waypoint</Button>
    </CopyToClipboard>
  </Popup>
);

const waypointGenerator = (name: string, location: Waypoint['location'], map: MapConfiguration, color?: string) =>
  [`/wp`, map.waypointCommandId, color, location.join(' '), `${name};`].filter(Boolean).join(' ');

const waypointIcon = new Icon({
  iconUrl: '/icons/ui_marker_waypoint.png',
  iconAnchor: [0, 32],
  popupAnchor: [16, -32],
  iconSize: [32, 32],
  className: 'tint-blue',
});

const pointOfInterestIcon = new Icon({
  iconUrl: '/icons/ui_marker_waypoint.png',
  iconAnchor: [0, 32],
  popupAnchor: [16, -32],
  iconSize: [32, 32],
  className: 'tint-gold',
});

const cityIcon = new Icon({
  iconUrl: '/icons/ui_marker_city.png',
  iconAnchor: [0, 32],
  popupAnchor: [16, -32],
  iconSize: [32, 32],
});

const collectionIcon = new Icon({
  iconUrl: '/icons/ui_marker_waypoint.png',
  iconAnchor: [0, 32],
  popupAnchor: [16, -32],
  iconSize: [32, 32],
});

const DefaultWaypointMarker: React.FC<WaypointMarkerRenderProps> = ({ waypoint, map, icon }) => {
  return (
    <Marker
      icon={icon || waypointIcon}
      key={`${waypoint.name}${waypoint.location[0]}${waypoint.location[2]}`}
      position={[waypoint.location[2], waypoint.location[0]]}
    >
      <GenericWaypointTooltip waypoint={waypoint} map={map} />
      <GenericWaypointPopup waypoint={waypoint} map={map} />
    </Marker>
  );
};

const WaypointRenderConfiguration: Record<WaypointType, React.FC<WaypointMarkerRenderProps>> = {
  [WaypointType.Waypoint]: DefaultWaypointMarker,
  [WaypointType.PointOfInterestWaypoint]: function PointOfInerestWaypointMarker(props) {
    return <DefaultWaypointMarker {...props} icon={pointOfInterestIcon} />;
  },

  [WaypointType.City]: function CityWaypointMarker({ waypoint, map }) {
    const [showCityLimits, setShowCityLimits] = useState(false);
    const RankAttributes: { [index: number]: { name: string; radius: number } } = {
      1: {
        radius: 150,
        name: 'Outpost',
      },
      2: {
        radius: 150,
        name: 'Village',
      },
      3: {
        radius: 300,
        name: 'Township',
      },
      4: {
        radius: 400,
        name: 'City',
      },
      5: {
        radius: 450,
        name: 'Metropolis',
      },
    };

    if (waypoint.type !== WaypointType.City) return null;

    return (
      <Marker
        icon={cityIcon}
        key={`${waypoint.name}${waypoint.location[0]}${waypoint.location[2]}`}
        position={[waypoint.location[2], waypoint.location[0]]}
        onpopupopen={() => setShowCityLimits(true)}
        onpopupclose={() => setShowCityLimits(false)}
      >
        {showCityLimits && waypoint.extraAttributes && (
          <Circle
            center={[waypoint.location[2], waypoint.location[0]]}
            radius={RankAttributes[waypoint.extraAttributes.rank].radius || 0}
          />
        )}
        <GenericWaypointTooltip waypoint={waypoint} map={map} />
        <Popup>
          <h3>
            {waypoint.name} &mdash; {waypoint.location.join(',')}
          </h3>
          {waypoint.description}
          {waypoint.extraAttributes && (
            <ul>
              <li>Founding Date: {new Date(waypoint.extraAttributes.foundingDate).toLocaleDateString()}</li>
              <li>
                Rank: {RankAttributes[waypoint.extraAttributes.rank].name} ({waypoint.extraAttributes.rank})
              </li>
            </ul>
          )}

          <CopyToClipboard text={waypointGenerator(waypoint.name, waypoint.location, map)}>
            <Button color="primary">Copy as Waypoint</Button>
          </CopyToClipboard>
        </Popup>
      </Marker>
    );
  },

  [WaypointType.CollectionItem]: function CollectionWaypointMarker({ waypoint, map }) {
    if (waypoint.type !== WaypointType.CollectionItem) return null;

    return (
      <Marker
        icon={collectionIcon}
        key={`${waypoint.name}${waypoint.location[0]}${waypoint.location[2]}`}
        position={[waypoint.location[2], waypoint.location[0]]}
      >
        <GenericWaypointTooltip waypoint={waypoint} map={map} />
        <Popup>
          <h3>
            {waypoint.name} &mdash; {waypoint.location.join(',')}
          </h3>
          <p>
            Part of the collection: <strong>{waypoint.extraAttributes.collection}</strong>
          </p>
          {waypoint.description}
          <div>
            <CopyToClipboard
              text={waypointGenerator(
                `${waypoint.extraAttributes.collection} ${waypoint.name}`,
                waypoint.location,
                map,
                'white'
              )}
            >
              <Button color="primary">Copy as Waypoint</Button>
            </CopyToClipboard>
          </div>
        </Popup>
      </Marker>
    );
  },
};

export default WaypointRenderConfiguration;
