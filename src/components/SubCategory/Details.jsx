import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconText from '../IconText';
import C from './constants';

const Details = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        {C.DETAILS.slice(0, 2).map((item) => (
          <IconText icon={item.icon}>
            {item.count} {item.text}
          </IconText>
        ))}
      </Grid>
      <Grid item>
        <Divider orientation="vertical" />
      </Grid>
      <Grid item>
        {C.DETAILS.slice(2, 4).map((item) => (
          <IconText icon={item.icon}>
            {item.count} {item.text}
          </IconText>
        ))}
      </Grid>
    </Grid>
  );
};

export default Details;
