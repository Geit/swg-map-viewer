import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil';

import PlanetList from './pages/PlanetList';
import Planet from './pages/Planet';
import theme from './theme';
import 'leaflet/dist/leaflet.css';
import './app.scss';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
