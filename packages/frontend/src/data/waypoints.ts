import { WaypointType } from '../enums';

import mapConfigs from './maps';
import cities from './cities';
import pointsOfInterest from './pois';
import collections from './collections';

export type RequireFields<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface BaseWaypoint {
  id?: string;
  name: string;
  description: string | null;
  type: WaypointType;
  serverIds: string[] | null;
  location: [number, number, number];
  planet: typeof mapConfigs[number]['id'];
  extraAttributes?: unknown;
}

export interface CollectionItemWaypoint extends BaseWaypoint {
  type: WaypointType.CollectionItem;
  extraAttributes: {
    collection: string;
  };
}

export interface CityWaypoint extends BaseWaypoint {
  type: WaypointType.City;
  extraAttributes?: {
    foundingDate: string;
    rank: number;
  };
}

export interface PointOfInterestWaypoint extends BaseWaypoint {
  type: WaypointType.PointOfInterestWaypoint;
  extraAttributes?: unknown;
}

export type Waypoint = CollectionItemWaypoint | PointOfInterestWaypoint | CityWaypoint;

export const waypoints: Waypoint[] = [...cities, ...pointsOfInterest, ...collections].map((way, idx) => ({
  ...way,
  id: `${idx}`,
}));
