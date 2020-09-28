import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FeaturedCategory } from '../../../../components';

const SimilarCategories = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Similar Categories
      </Typography>
      {Array.from(new Array(3)).map((_, index) => (
        <FeaturedCategory gutterBottom key={`similar-categories-${index}`} />
      ))}
    </>
  );
};

export default SimilarCategories;
