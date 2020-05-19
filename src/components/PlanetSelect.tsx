import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import mapConfigs from '../data/maps';

interface PlanetSelectProps {
  currentPlanet: typeof mapConfigs[number];
}

const PlanetSelect: React.FC<PlanetSelectProps> = ({ currentPlanet }) => {
  const history = useHistory();

  return (
    <FormControl fullWidth>
      <InputLabel id="planet-select">Planet</InputLabel>
      <Select
        value={currentPlanet.id}
        labelId="planet-select"
        onChange={evt => history.push(`/planets/${evt.target.value}`)}
      >
        {mapConfigs.map(map => (
          <MenuItem value={map.id} key={map.id}>
            {map.displayName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PlanetSelect;
