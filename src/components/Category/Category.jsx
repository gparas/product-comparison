import React from 'react';
import Card from '@material-ui/core/Card';
import Details from './Details';
import ProductList from './ProductList';

const Category = () => {
  return (
    <Card variant="outlined">
      <Details />
      <ProductList />
    </Card>
  );
};

export default Category;
