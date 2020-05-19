import React from 'react';

import servers from '../../data/servers';

interface ServerContextType {
  serverId: typeof servers[number]['serverId'];
  setServerId: React.Dispatch<React.SetStateAction<typeof servers[number]['serverId']>>;
}

const ServerContext = React.createContext<ServerContextType>({
  serverId: servers[0].serverId,
  setServerId: () => null,
});

export default ServerContext;
