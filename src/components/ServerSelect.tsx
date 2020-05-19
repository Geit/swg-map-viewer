import React, { useContext } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

import servers from '../data/servers';

import ServerContext from './contexts/ServerContext';

const ServerSelect: React.FC = () => {
  const { serverId, setServerId } = useContext(ServerContext);

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="planet-select">Server</InputLabel>
      <Select
        value={serverId}
        labelId="planet-select"
        onChange={evt => {
          if (typeof evt.target?.value !== 'string') return;

          setServerId(evt.target.value ?? servers[0].serverId);
        }}
      >
        {servers.map(server => (
          <MenuItem key={server.serverId} value={server.serverId}>
            {server.displayName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ServerSelect;
