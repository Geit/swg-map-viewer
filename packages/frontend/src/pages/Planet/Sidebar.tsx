import React, { useState } from 'react';
import { Box, makeStyles, Button } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import { groupBy } from 'lodash';

import { ReactComponent as SWGLogo } from '../../components/swg.svg';
import destroyer from '../../themes/destroyer';
import { WaypointType } from '../../enums';
import ServerSelect from '../../components/ServerSelect';
import PlanetSelect from '../../components/PlanetSelect';
import { Waypoint } from '../../data/waypoints';
import { MapConfiguration } from '../../data/maps';
import AboutDialog from '../../components/AboutDialog';

const useStyles = makeStyles(theme => ({
  outerSidebarBox: {
    display: 'flex',
    height: '100%',
    padding: theme.spacing(1),
    flexDirection: 'column',
    boxShadow: 'inset 0 0 20px rgba(0,0,0, 0.8)',
    border: `1px solid ${destroyer.line1}`,
    borderRadius: 8,
    textShadow: '1px 1px black',
  },
  innerSidebarBox: {
    border: `1px solid ${destroyer.contrast5}`,
    borderRadius: 8,
    padding: theme.spacing(1),

    overflow: 'auto',
    backgroundColor: destroyer.back2,
    boxShadow: 'inset 0 0 20px rgba(0,0,0, 0.8)',
  },
  swgIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '1.3rem',
    color: 'gold',
    marginRight: theme.spacing(1),
  },
}));

const ExpandIcon = () => <img alt="" style={{ height: '0.8rem' }} src="/icons/ui_tree_expand.png" />;
const CollapseIcon = () => <img alt="" style={{ height: '0.8rem' }} src="/icons/ui_tree_collapse.png" />;

interface SidebarProps {
  waypointsForMap: Waypoint[];
  currentMap: MapConfiguration;
  setSelectedTreeItem: (value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ waypointsForMap, currentMap, setSelectedTreeItem }) => {
  const classes = useStyles();
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);

  return (
    <Box p={2} height="100vh">
      <Box className={classes.outerSidebarBox}>
        <Box className={classes.innerSidebarBox} flexGrow={1} mb={2}>
          <TreeView
            defaultExpandIcon={<ExpandIcon />}
            defaultCollapseIcon={<CollapseIcon />}
            onNodeSelect={(_: unknown, value: string) => setSelectedTreeItem(value)}
          >
            <TreeItem nodeId={`category-${WaypointType.PointOfInterestWaypoint}`} label="Points of Interest">
              {waypointsForMap
                .filter(waypoint => waypoint.type === WaypointType.PointOfInterestWaypoint)
                .map(waypoint => (
                  <TreeItem key={`item-${waypoint.id}`} nodeId={`item-${waypoint.id}`} label={waypoint.name} />
                ))}
            </TreeItem>
            <TreeItem nodeId={`category-${WaypointType.City}`} label="City">
              {waypointsForMap
                .filter(waypoint => waypoint.type === WaypointType.City)
                .map(waypoint => (
                  <TreeItem key={`item-${waypoint.id}`} nodeId={`item-${waypoint.id}`} label={waypoint.name} />
                ))}
            </TreeItem>
            <TreeItem nodeId={`category-${WaypointType.CollectionItem}`} label="Collections">
              {Object.entries(
                groupBy(
                  waypointsForMap.filter(waypoint => waypoint.type === WaypointType.CollectionItem),
                  'extraAttributes.collection'
                )
              ).map(([categoryTitle, waypoints]) => (
                <TreeItem key={`item-${categoryTitle}`} nodeId={`item-${categoryTitle}`} label={categoryTitle}>
                  {waypoints.map(waypoint => (
                    <TreeItem key={`item-${waypoint.id}`} nodeId={`item-${waypoint.id}`} label={waypoint.name} />
                  ))}
                </TreeItem>
              ))}
            </TreeItem>
          </TreeView>
        </Box>

        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          flexBasis="40%"
          className={classes.innerSidebarBox}
        >
          <PlanetSelect currentPlanet={currentMap} />
          <ServerSelect />

          <Box alignSelf="end" mt="auto">
            <Button onClick={() => setAboutDialogOpen(true)}>
              <SWGLogo className={classes.swgIcon} />
              About
            </Button>
            <AboutDialog open={aboutDialogOpen} onClose={() => setAboutDialogOpen(false)} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
