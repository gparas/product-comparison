import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const SubHeader = ({ icon, children }) => (
  <Grid container spacing={1} alignItems="center">
    <Grid item>{icon}</Grid>
    <Grid item>
      <Typography color="textSecondary" variant="body2">
        {children}
      </Typography>
    </Grid>
  </Grid>
);

export default SubHeader;
