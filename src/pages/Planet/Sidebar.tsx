import React from 'react';
import { Box } from '@material-ui/core';
import { TreeView, TreeItem } from '@material-ui/lab';
import { groupBy } from 'lodash';

import destroyer from '../../themes/destroyer';
import { WaypointType } from '../../enums';
import ServerSelect from '../../components/ServerSelect';
import PlanetSelect from '../../components/PlanetSelect';
import { Waypoint } from '../../data/waypoints';
import { MapConfiguration } from '../../data/maps';

const ExpandIcon = () => <img alt="" style={{ height: '0.8rem' }} src="/icons/ui_tree_expand.png" />;
const CollapseIcon = () => <img alt="" style={{ height: '0.8rem' }} src="/icons/ui_tree_collapse.png" />;

interface SidebarProps {
  waypointsForMap: Waypoint[];
  currentMap: MapConfiguration;
  setSelectedTreeItem: (value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ waypointsForMap, currentMap, setSelectedTreeItem }) => {
  return (
    <Box p={2} height="100vh">
      <Box
        height="100%"
        p={1}
        border={1}
        borderRadius={8}
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto',
          boxShadow: 'inset 0 0 20px rgba(0,0,0, 0.8)',
          borderColor: destroyer.line1,
          textShadow: '1px 1px black',
        }}
      >
        <Box
          border={1}
          borderRadius={8}
          p={1}
          mb={2}
          style={{
            flexGrow: 1,
            overflow: 'auto',
            backgroundColor: destroyer.back2,
            boxShadow: 'inset 0 0 20px rgba(0,0,0, 0.8)',
            borderColor: destroyer.contrast5,
          }}
        >
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
          p={1}
          border={1}
          borderRadius={8}
          style={{
            flexBasis: '30%',
            overflow: 'auto',
            backgroundColor: destroyer.back2,
            boxShadow: 'inset 0 0 20px rgba(0,0,0, 0.8)',
            borderColor: destroyer.contrast5,
          }}
        >
          <PlanetSelect currentPlanet={currentMap} />
          <ServerSelect />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
