import React from 'react';
import Details from './Details';
import Card from '../Card';
import ProductList from './ProductList';

const Category = () => {
  return (
    <Card raised>
      <Details />
      <ProductList />
    </Card>
  );
};

export default Category;
