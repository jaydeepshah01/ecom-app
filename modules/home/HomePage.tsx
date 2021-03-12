import React from 'react';
import ProductGrid from '../products/ProductGrid/ProductGrid';
import { DUMMY_PRODUCTS } from "../products/products";

/**
 * Home page with product data
 */
function HomePage() {

  const getHomePageProducts = async () => ({
    page: 1,
    records: DUMMY_PRODUCTS,
    totalCount: 20,
    totalPages: 1
  });

  return (
    <div>
      <ProductGrid gridService={getHomePageProducts} />
    </div>
  );
}

export default HomePage;
