import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Card from '../Card';
import CardContent from '../CardContent';
import IconText from '../IconText';
import useStyles from './styles';
import C from './constants';

const FeaturedCategory = ({ gutterBottom }) => {
  const classes = useStyles();
  return (
    <Card raised gutterBottom={gutterBottom}>
      <CardActionArea component={RouterLink} to="/app/category">
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
      </CardActionArea>
    </Card>
  );
};

FeaturedCategory.propTypes = {
  gutterBottom: PropTypes.bool,
};
export default FeaturedCategory;
