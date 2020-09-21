import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import props from './props';
import typography from './typography';

const theme = createMuiTheme({
  palette,
  typography,
  props,
  shape: {
    borderRadius: 2,
  },
});

export default theme;
