import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
  palette,
  typography,
  shape: {
    borderRadius: 2,
  },
});

export default theme;
