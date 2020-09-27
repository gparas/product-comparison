import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from '../Logo';
import useStyles from './styles';
import C from './constants';

const NavBar = ({ ...other }) => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} {...other}>
      <Container>
        <Toolbar disableGutters>
          <Logo />
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
          <Button
            className={classes.loginCta}
            color="inherit"
            variant="outlined"
          >
            Sign up/Log in
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
