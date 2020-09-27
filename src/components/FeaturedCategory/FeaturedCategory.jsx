import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '../Card';
import CardContent from '../CardContent';
import IconText from '../IconText';
import useStyles from './styles';
import C from './constants';

const FeaturedCategory = () => {
  const classes = useStyles();
  return (
    <Card raised>
      <CardContent>
        <CardMedia
          component="img"
          alt="Featured Category"
          height="170"
          image="/static/images/feature_category.jpg"
          title="Featured Category"
          className={classes.media}
        />
        <Typography gutterBottom>
          <b>Header</b>
        </Typography>
        {C.DETAILS.map((item, i) => (
          <IconText key={`featured-category-${i}`} icon={item.icon}>
            {item.text}
          </IconText>
        ))}
      </CardContent>
    </Card>
  );
};

export default FeaturedCategory;
