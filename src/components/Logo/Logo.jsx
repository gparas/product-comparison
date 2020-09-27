import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import useStyles from './styles';

const Logo = () => {
  const classes = useStyles();
  return (
    <Link
      component={RouterLink}
      to="/"
      variant="h4"
      color="inherit"
      underline="none"
      className={classes.root}
    >
      LOGO
    </Link>
  );
};

export default Logo;
