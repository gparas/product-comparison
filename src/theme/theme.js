import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';

const theme = createMuiTheme({
  palette,
  shape: {
    borderRadius: 2,
  },
});

export default theme;
