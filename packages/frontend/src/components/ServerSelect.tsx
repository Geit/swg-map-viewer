import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useRecoilState } from 'recoil';

import servers from '../data/servers';
import { currentServerIdAtom } from '../atoms/waypoints';

const ServerSelect: React.FC = () => {
  const [serverId, setServerId] = useRecoilState(currentServerIdAtom);

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
