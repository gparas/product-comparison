import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Banner, SubCategories, SimilarCategories } from './components';

const Category = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={4}>
        <SubCategories />
        <Banner />
        <SimilarCategories />
      </Grid>
      <Grid item sm={8}>
        main
      </Grid>
    </Grid>
  );
};

export default Category;
