import { CityWaypoint } from '../waypoints';

import legendsCities from './legends-cities';
import defaultCities from './default-cities';

const cities: readonly CityWaypoint[] = [...defaultCities, ...legendsCities];

export default cities;
