import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  Archive,
  ShoppingBag,
  Copy,
  MessageSquare,
  ArrowUpCircle,
} from 'react-feather';
import useStyles from './styles';
import C from './constants';

const ICON_COMPONENTS = {
  [C.ICONS.SUB_CATEGORIES]: Copy,
  [C.ICONS.PRODUCTS]: Archive,
  [C.ICONS.BRANDS]: ShoppingBag,
  [C.ICONS.COMMNETS]: MessageSquare,
  [C.ICONS.VOTES]: ArrowUpCircle,
};

const IconText = ({ icon, children }) => {
  const classes = useStyles();
  const Component = ICON_COMPONENTS[icon];
  return (
    <Grid container spacing={1} alignItems="center" className={classes.root}>
      <Grid item>
        <Component size={16} />
      </Grid>
      <Grid item>
        <Typography color="inherit" variant="body2">
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};

IconText.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
};

export default IconText;
