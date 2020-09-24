import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import props from './props';
import typography from './typography';
import breakpoints from './breakpoints';

const theme = createMuiTheme({
  breakpoints,
  palette,
  typography,
  props,
  shape: {
    borderRadius: 8,
  },
});

window.theme = theme;

export default theme;
