import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// eslint-disable-next-line import/no-unresolved
import SWGLogo from '../../components/swg.svg?react';
import destroyer from '../../themes/destroyer';
import ServerSelect from '../../components/ServerSelect';
import PlanetSelect from '../../components/PlanetSelect';
import { MapConfiguration } from '../../data/maps';
import AboutDialog from '../../components/AboutDialog';
import WaypointTree from '../../components/WaypointTree';

const useStyles = makeStyles(() => ({
  outerSidebarBox: {
    display: 'flex',
    height: '100%',
    padding: '16px',
    flexDirection: 'column',
    boxShadow: 'inset 0 0 20px rgba(0,0,0, 0.8)',
    border: `1px solid ${destroyer.line1}`,
    borderRadius: 8,
    textShadow: '1px 1px black',
  },
  innerSidebarBox: {
    border: `1px solid ${destroyer.contrast5}`,
    borderRadius: 8,
    padding: '16px',

    overflow: 'auto',
    backgroundColor: destroyer.back2,
    boxShadow: 'inset 0 0 20px rgba(0,0,0, 0.8)',
  },
  swgIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '1.3rem',
    color: 'gold',
    marginRight: '16px',
  },
}));

interface SidebarProps {
  currentMap: MapConfiguration;
}

const Sidebar: React.FC<SidebarProps> = ({ currentMap }) => {
  const classes = useStyles();
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);

  return (
    <Box component="div" sx={{ height: '100vh', padding: '32px' }}>
      <Box component="div" className={classes.outerSidebarBox}>
        <Box
          component="div"
          className={classes.innerSidebarBox}
          sx={{ display: 'flex', flexGrow: 1, marginBottom: '32px' }}
          flexGrow={1}
          mb={2}
        >
          <WaypointTree />
        </Box>

        <Box
          component="div"
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '40%',
          }}
          className={classes.innerSidebarBox}
        >
          <PlanetSelect currentPlanet={currentMap} />
          <ServerSelect />

          <Box component="div" sx={{ display: 'flex', alignSelf: 'end', marginTop: 'auto' }}>
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
