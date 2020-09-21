import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { SearchForm } from '../../components';
import C from './constants';

const Hero = () => {
  return (
    <Grid container>
      <Grid item sm={8}>
        <Typography variant="h1" color="inherit">
          {C.HERO.TITLE}
        </Typography>
        <Toolbar />
        <Typography variant="h3" color="inherit" gutterBottom>
          {C.HERO.LABEL}
        </Typography>
        <SearchForm placeholder={C.HERO.PLACEHOLDER} />
      </Grid>
    </Grid>
  );
};

export default Hero;
