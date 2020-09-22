import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Details = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Avatar variant="rounded" className={classes.avatar}>
          N
        </Avatar>
      </Grid>
      <Grid item>
        <Typography gutterBottom>
          <b>Best headphones below 100€</b>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Details;
