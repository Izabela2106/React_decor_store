import React from 'react';
import { Filters, ProductList, PageHero } from 'components';

const ProductsPage = () => (
  <>
    <PageHero title="products" />
    <Filters />
    <ProductList />
  </>
);

export default ProductsPage;
