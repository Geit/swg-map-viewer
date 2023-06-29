import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import mapConfigs from '../data/maps';

interface PlanetSelectProps {
  currentPlanet: (typeof mapConfigs)[number];
}

const PlanetSelect: React.FC<PlanetSelectProps> = ({ currentPlanet }) => {
  const navigate = useNavigate();

  return (
    <FormControl fullWidth>
      <InputLabel id="planet-select">Planet</InputLabel>
      <Select
        value={currentPlanet.id}
        labelId="planet-select"
        onChange={evt => navigate(`/planets/${evt.target.value}`)}
      >
        {mapConfigs
          .filter(mapConfig => mapConfig.raster)
          .map(map => (
            <MenuItem value={map.id} key={map.id}>
              {map.displayName}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default PlanetSelect;
