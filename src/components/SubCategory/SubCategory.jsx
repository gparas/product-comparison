import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../Card';
import CardContent from '../CardContent';
import Header from './Header.jsx';
import Details from './Details.jsx';

const SubCategory = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Details />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SubCategory;
