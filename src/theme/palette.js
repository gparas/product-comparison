import { fade } from '@material-ui/core/styles/colorManipulator';

const brandColor = '#2F6966';

const light = {
  background: {
    default: '#FFFFFF',
  },
  text: {
    primary: '#484848',
    secondary: '#717171',
  },
  divider: '#F2F2F2',
};

const dark = {
  background: {
    default: '#303030',
  },
};

const type = 'light';
const types = { dark, light };

export default {
  primary: {
    main: brandColor,
  },
  secondary: {
    main: fade(brandColor, 0.1),
    contrastText: brandColor,
  },
  type: type,
  ...types[type],
};
