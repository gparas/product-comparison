import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import C from './constants';

const NavBar = ({ ...other }) => {
  const classes = useStyles();
  return (
    <AppBar {...other}>
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          variant="h6"
          color="inherit"
          underline="none"
          className={classes.brand}
        >
          LOGO
        </Link>
        {C.LINKS.map((link) => (
          <Button
            key={link.label}
            component={RouterLink}
            to={link.url}
            color="inherit"
          >
            {link.label}
          </Button>
        ))}
        <Button className={classes.loginCta} color="inherit" variant="outlined">
          Sign up/Log in
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
