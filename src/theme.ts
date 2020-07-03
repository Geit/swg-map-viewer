import { createMuiTheme } from '@material-ui/core/styles';

import destroyer from './themes/destroyer';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
  },
  palette: {
    type: 'dark',
    primary: {
      main: destroyer.selected,
    },
    background: {
      default: destroyer.AccentDark,
      paper: destroyer.AccentDark,
    },
    action: {
      selectedOpacity: 0.6,
      hover: destroyer.holocron,
      selected: destroyer.back3,
    },
    text: {
      primary: destroyer.text1,
      secondary: destroyer.text2,
      disabled: destroyer.textDisabled,
    },
  },
});

export default theme;
