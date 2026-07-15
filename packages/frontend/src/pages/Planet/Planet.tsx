import React, { useState, Suspense, useMemo, useEffect } from 'react';
import { Grid, Box, Drawer, Hidden, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAtomValue, useSetAtom } from 'jotai';

import GalaxiesPlanetMap from '../../components/GalaxiesPlanetMap';
import mapConfigs from '../../data/maps';
import { waypointsForMapDisplayAtom, currentPlanetAtom, sidebarSelectedNodeAtom } from '../../atoms/waypoints';

const SidebarLazy = React.lazy(() => import('./Sidebar'));

export default function Planet() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { planet } = useParams<{ planet?: string }>();
  const waypointsToRender = useAtomValue(waypointsForMapDisplayAtom);
  const setCurrentPlanet = useSetAtom(currentPlanetAtom);
  const setCurrentlySelectedNode = useSetAtom(sidebarSelectedNodeAtom);

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
          <Box component="div" sx={{ height: '100vh' }}>
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
        <Box component="div" className="mobileDrawerTrigger">
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
