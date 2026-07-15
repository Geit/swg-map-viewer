import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import SWGLogo from '../../components/swg.svg?react';
import destroyer from '../../themes/destroyer';
import ServerSelect from '../../components/ServerSelect';
import PlanetSelect from '../../components/PlanetSelect';
import TileSetSelect from '../../components/TileSetSelect';
import { MapConfiguration } from '../../data/maps';
import AboutDialog from '../../components/AboutDialog';
import WaypointTree from '../../components/WaypointTree';

const OuterSidebarBox = styled(Box)({
  display: 'flex',
  height: '100%',
  padding: '16px',
  flexDirection: 'column',
  boxShadow: 'inset 0 0 20px rgba(0,0,0, 0.8)',
  border: `1px solid ${destroyer.line1}`,
  borderRadius: 8,
  textShadow: '1px 1px black',
});

const InnerSidebarBox = styled(Box)({
  border: `1px solid ${destroyer.contrast5}`,
  borderRadius: 8,
  padding: '16px',

  overflow: 'auto',
  backgroundColor: destroyer.back2,
  boxShadow: 'inset 0 0 20px rgba(0,0,0, 0.8)',
});

const SwgIcon = styled(SWGLogo)({
  display: 'inline-block',
  verticalAlign: 'middle',
  height: '1.3rem',
  color: 'gold',
  marginRight: '16px',
});

interface SidebarProps {
  currentMap: MapConfiguration;
}

const Sidebar: React.FC<SidebarProps> = ({ currentMap }) => {
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);

  return (
    <Box component="div" sx={{ height: '100vh', padding: '32px' }}>
      <OuterSidebarBox>
        <InnerSidebarBox sx={{ display: 'flex', flexGrow: 1, marginBottom: '32px' }}>
          <WaypointTree />
        </InnerSidebarBox>

        <InnerSidebarBox
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '40%',
          }}
        >
          <PlanetSelect currentPlanet={currentMap} />
          <ServerSelect />
          <TileSetSelect currentMap={currentMap} />

          <Box component="div" sx={{ display: 'flex', alignSelf: 'end', marginTop: 'auto' }}>
            <Button onClick={() => setAboutDialogOpen(true)}>
              <SwgIcon />
              About
            </Button>
            <AboutDialog open={aboutDialogOpen} onClose={() => setAboutDialogOpen(false)} />
          </Box>
        </InnerSidebarBox>
      </OuterSidebarBox>
    </Box>
  );
};

export default Sidebar;
