import React, { useState, Suspense, useMemo, useEffect } from 'react';
import { Grid, Box, Drawer, Hidden, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import GalaxiesPlanetMap from '../../components/GalaxiesPlanetMap';
import mapConfigs from '../../data/maps';
import { waypointsForMapDisplaySelector, currentPlanetAtom, sidebarSelectedNodeAtom } from '../../atoms/waypoints';

const SidebarLazy = React.lazy(() => import('./Sidebar'));

export default function Planet() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { planet } = useParams<{ planet?: string }>();
  const waypointsToRender = useRecoilValue(waypointsForMapDisplaySelector);
  const setCurrentPlanet = useSetRecoilState(currentPlanetAtom);
  const setCurrentlySelectedNode = useSetRecoilState(sidebarSelectedNodeAtom);

  const mapConfig = useMemo(() => mapConfigs.find(({ id }) => id === planet), [planet]);

  useEffect(() => {
    setCurrentPlanet(planet || null);
    setCurrentlySelectedNode(null);
  }, [planet, setCurrentPlanet, setCurrentlySelectedNode]);

  if (typeof planet !== 'string' || !mapConfig) return null;

  return (
    <>
      <Grid container>
        <Grid item xs>
          <Box height="100vh">
            <GalaxiesPlanetMap map={mapConfig} waypoints={waypointsToRender} />
          </Box>
        </Grid>
        <Hidden smDown initialWidth="lg">
          <Grid item xs={4} sm={4} md={3}>
            <Suspense fallback={null}>
              <SidebarLazy currentMap={mapConfig} />
            </Suspense>
          </Grid>
        </Hidden>
      </Grid>
      <Hidden smUp>
        {/* @ts-ignore */}
        <Box className="mobileDrawerTrigger">
          <Button variant="contained" color="primary" className="" onClick={() => setDrawerOpen(true)}>
            Menu
          </Button>
          <Drawer onClose={() => setDrawerOpen(false)} open={drawerOpen} anchor="right">
            <Suspense fallback={null}>
              <SidebarLazy currentMap={mapConfig} />
            </Suspense>
          </Drawer>
        </Box>
      </Hidden>
    </>
  );
}
