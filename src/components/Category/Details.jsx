import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '../CardContent';
import IconText from '../IconText';
import useStyles from './styles';
import C from './constants';

const Details = () => {
  const classes = useStyles();
  return (
    <CardContent>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar variant="rounded" className={classes.avatar}>
            N
          </Avatar>
        </Grid>
        <Grid item>
          <Typography gutterBottom>
            <b>Header</b>
          </Typography>
          {C.DETAILS.map((item, i) => (
            <IconText key={`category-${i}`} icon={item.icon}>
              {item.count} {item.text}
            </IconText>
          ))}
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default Details;
