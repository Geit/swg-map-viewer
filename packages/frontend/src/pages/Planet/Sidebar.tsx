import React, { useState } from 'react';
import { Box, makeStyles, Button } from '@material-ui/core';

import { ReactComponent as SWGLogo } from '../../components/swg.svg';
import destroyer from '../../themes/destroyer';
import ServerSelect from '../../components/ServerSelect';
import PlanetSelect from '../../components/PlanetSelect';
import { MapConfiguration } from '../../data/maps';
import AboutDialog from '../../components/AboutDialog';
import WaypointTree from '../../components/WaypointTree';

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

interface SidebarProps {
  currentMap: MapConfiguration;
}

const Sidebar: React.FC<SidebarProps> = ({ currentMap }) => {
  const classes = useStyles();
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);

  return (
    <Box p={2} height="100vh">
      <Box className={classes.outerSidebarBox}>
        <Box className={classes.innerSidebarBox} flexGrow={1} mb={2}>
          <WaypointTree />
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
