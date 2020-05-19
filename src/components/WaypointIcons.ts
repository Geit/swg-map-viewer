import { Icon } from 'leaflet';

import { WaypointType } from '../enums';

const WaypointIcons: Record<WaypointType, Icon> = {
  [WaypointType.Waypoint]: new Icon({
    iconUrl: '/icons/ui_marker_waypoint.png',
    iconAnchor: [0, 32],
    popupAnchor: [16, -32],
    iconSize: [32, 32],
    className: 'tint-blue',
  }),
  [WaypointType.PointOfInterestWaypoint]: new Icon({
    iconUrl: '/icons/ui_marker_waypoint.png',
    iconAnchor: [0, 32],
    popupAnchor: [16, -32],
    iconSize: [32, 32],
    className: 'tint-gold',
  }),
  [WaypointType.City]: new Icon({
    iconUrl: '/icons/ui_marker_city.png',
    iconAnchor: [0, 32],
    popupAnchor: [16, -32],
    iconSize: [32, 32],
  }),
};

export default WaypointIcons;
