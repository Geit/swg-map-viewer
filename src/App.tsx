import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import PlanetList from './pages/PlanetList';
import Planet from './pages/Planet';
import theme from './theme';
import servers from './data/servers';
import ServerContext from './components/contexts/ServerContext';

import 'leaflet/dist/leaflet.css';
import './app.scss';

function App() {
  const [serverId, setServerId] = useState(servers[1].serverId);

  return (
    <ThemeProvider theme={theme}>
      <ServerContext.Provider value={{ serverId, setServerId }}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/planets/:planet">
              <Planet />
            </Route>

            <Route>
              <PlanetList />
            </Route>
          </Switch>
        </Router>
      </ServerContext.Provider>
    </ThemeProvider>
  );
}

export default App;
