import React, { useState, Suspense, useMemo, useEffect } from 'react';
import { Grid, Box, Drawer, Button, useMediaQuery } from '@mui/material';
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

  // Replaces the removed <Hidden> component: the inline sidebar showed on md+
  // (was `Hidden smDown`) and the mobile drawer trigger showed on xs (was `Hidden smUp`).
  // noSsr evaluates the query immediately (client-only app) to avoid a layout flash.
  const showSidebar = useMediaQuery(theme => theme.breakpoints.up('md'), { noSsr: true });
  const showMobileMenu = useMediaQuery(theme => theme.breakpoints.down('sm'), { noSsr: true });

  const mapConfig = useMemo(() => mapConfigs.find(({ id }) => id === planet), [planet]);

  useEffect(() => {
    setCurrentPlanet(planet || null);
    setCurrentlySelectedNode(null);
  }, [planet, setCurrentPlanet, setCurrentlySelectedNode]);

  if (typeof planet !== 'string' || !mapConfig) return null;

  return (
    <>
      <Grid container>
        <Grid size="grow">
          <Box component="div" sx={{ height: '100vh' }}>
            <GalaxiesPlanetMap map={mapConfig} waypoints={waypointsToRender} />
          </Box>
        </Grid>
        {showSidebar && (
          <Grid size={{ xs: 4, sm: 4, md: 3 }}>
            <Suspense fallback={null}>
              <SidebarLazy currentMap={mapConfig} />
            </Suspense>
          </Grid>
        )}
      </Grid>
      {showMobileMenu && (
        <Box component="div" className="mobileDrawerTrigger">
          <Button variant="contained" color="primary" onClick={() => setDrawerOpen(true)}>
            Menu
          </Button>
          <Drawer onClose={() => setDrawerOpen(false)} open={drawerOpen} anchor="right">
            <Suspense fallback={null}>
              <SidebarLazy currentMap={mapConfig} />
            </Suspense>
          </Drawer>
        </Box>
      )}
    </>
  );
}
