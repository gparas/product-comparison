const light = {
  background: {
    default: '#FFFFFF',
  },
  text: {
    secondary: '#9F9F9F',
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
    main: '#2F6966',
  },
  type: type,
  ...types[type],
};
