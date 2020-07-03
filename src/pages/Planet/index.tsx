import React, { useContext, useState, Suspense, useMemo } from 'react';
import { Grid, Box, Drawer, Hidden, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import GalaxiesPlanetMap from '../../components/GalaxiesPlanetMap';
import mapConfigs from '../../data/maps';
import { waypoints } from '../../data/waypoints';
import ServerContext from '../../components/contexts/ServerContext';
import { WaypointType } from '../../enums';

const SidebarLazy = React.lazy(() => import('./Sidebar'));

export default function Planet() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { planet } = useParams();
  const { serverId } = useContext(ServerContext);
  const [selectedTreeItem, setSelectedTreeItem] = useState('');
  const [selectedTreeItemType, selectedTreeItemId] = selectedTreeItem.split('-');

  const mapConfig = useMemo(() => mapConfigs.find(({ id }) => id === planet), [planet]);

  if (typeof planet !== 'string' || !mapConfig) return null;

  const waypointsForMap = waypoints.filter(
    waypoint => waypoint.planet === mapConfig.id && (waypoint.serverId === serverId || waypoint.serverId === null)
  );

  const isCitySelected =
    selectedTreeItemType === 'item' &&
    selectedTreeItemId &&
    waypoints.find(waypoint => waypoint.id === selectedTreeItemId)?.type === WaypointType.City;

  const waypointsToRender = waypointsForMap.filter(waypoint => {
    if (waypoint.type === WaypointType.City && !isCitySelected) return true;

    if (selectedTreeItemType === 'category' && waypoint.type === Number(selectedTreeItemId)) return true;

    if (selectedTreeItemType === 'item' && waypoint.id === selectedTreeItemId) return true;

    return false;
  });

  return (
    <>
      <Grid container>
        <Grid item xs>
          <Box height="100vh">
            <GalaxiesPlanetMap map={mapConfig} waypoints={waypointsToRender} />
          </Box>
        </Grid>
        <Hidden xsDown initialWidth="lg">
          <Grid item xs={4} sm={4} md={2}>
            <Suspense fallback={null}>
              <SidebarLazy
                setSelectedTreeItem={setSelectedTreeItem}
                currentMap={mapConfig}
                waypointsForMap={waypointsForMap}
              />
            </Suspense>
          </Grid>
        </Hidden>
      </Grid>
      <Hidden smUp>
        <Box className="mobileDrawerTrigger">
          <Button variant="contained" color="primary" className="" onClick={() => setDrawerOpen(true)}>
            Menu
          </Button>
          <Drawer onClose={() => setDrawerOpen(false)} open={drawerOpen} anchor="right">
            <Suspense fallback={null}>
              <SidebarLazy
                setSelectedTreeItem={setSelectedTreeItem}
                currentMap={mapConfig}
                waypointsForMap={waypointsForMap}
              />
            </Suspense>
          </Drawer>
        </Box>
      </Hidden>
    </>
  );
}
