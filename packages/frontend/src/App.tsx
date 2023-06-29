import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import { RecoilRoot } from 'recoil';

import PlanetList from './pages/PlanetList/PlanetList';
import Planet from './pages/Planet/Planet';
import theme from './theme';
import 'leaflet/dist/leaflet.css';
import './app.scss';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

function App() {
  return (
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/planets/:planet" element={<Planet />} />
              <Route path="/" element={<PlanetList />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </RecoilRoot>
  );
}

export default App;
