import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Plus } from 'react-feather';
import { Card, CardContent } from '../../../../components';

const Banner = () => {
  return (
    <Card gutterBottom>
      <CardContent>
        <Typography gutterBottom>
          <b>Creare your own sub-categories</b>
        </Typography>
        <Typography variant="body2" paragraph>
          You can choose the product you want from the list and create your own
          sub-categories. Go ahead start creating!
        </Typography>
        <Button variant="contained" color="secondary" endIcon={<Plus />}>
          Create a sub-category
        </Button>
      </CardContent>
    </Card>
  );
};

export default Banner;
