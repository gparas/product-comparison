import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Facebook, Twitter, Instagram } from 'react-feather';
import Logo from '../Logo';
import useStyles from './styles';

const SOCIAL_ICONS = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
};

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <Divider className={classes.divider} />
        <Grid container justify="space-between">
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            {Object.keys(SOCIAL_ICONS).map((key) => {
              const Icon = SOCIAL_ICONS[key];
              return (
                <IconButton key={key}>
                  <Icon />
                </IconButton>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
