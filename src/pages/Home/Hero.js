import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { SearchForm } from '../../components';
import C from './constants';

const Hero = () => {
  return (
    <Grid container>
      <Grid item sm={8}>
        <Typography variant="h1" color="inherit" gutterBottom>
          {C.HERO.TITLE}
        </Typography>
        <SearchForm placeholder={C.HERO.PLACEHOLDER} />
      </Grid>
    </Grid>
  );
};

export default Hero;
