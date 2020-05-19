import { WaypointType } from '../enums';

import mapConfigs from './maps';
import cities from './cities';
import pointsOfInterest from './pois';

export type RequireFields<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface Waypoint {
  id?: string;
  name: string;
  description: string | null;
  type: WaypointType;
  serverId: string | null;
  location: [number, number, number];
  planet: typeof mapConfigs[number]['id'];
  extraAttributes?: unknown;
}

export const waypoints: RequireFields<Waypoint, 'id'>[] = [...cities, ...pointsOfInterest].map((way, idx) => ({
  ...way,
  id: `${idx}`,
}));
