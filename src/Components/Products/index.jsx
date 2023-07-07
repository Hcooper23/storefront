import React from 'react';
import { useSelector } from 'react-redux';

function Products() {
  const activeCategory = useSelector(state => state.activeCategory);
  const products = useSelector(state => state.products);

  const filteredProducts = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products;

  return (
    <div>
      <h2>Products</h2>
      {filteredProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;
