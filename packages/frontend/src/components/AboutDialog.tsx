import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogProps, Typography, Link } from '@mui/material';

interface AboutDialogProps {
  open: boolean;
  onClose: DialogProps['onClose'];
}

const AboutDialog: React.FC<AboutDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog scroll="paper" onClose={onClose} aria-labelledby="about-dialog-title" open={open}>
      <DialogTitle id="about-dialog-title">About</DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          by <Link href="https://geit.uk/">Geit</Link>.
        </Typography>
        <Typography variant="h6">Spotted a problem?</Typography>
        <Typography gutterBottom>
          If you&apos;ve spotted a problem, or have a suggestion then you can send me a Message on Discord using{' '}
          <Link href="https://discord.com/channels/@me/271420544321191936">Geit#1694</Link>. Or, if you&apos;re so
          inclined, you can make a pull request on the project repository on{' '}
          <Link href="https://github.com/geit/swg-map-viewer">GitHub</Link>.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default AboutDialog;
