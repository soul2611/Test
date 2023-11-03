import React from 'react';
import './ProductsList.css'; // Import the CSS file for styling

const ProductsList = ({ products, sortBy, filterBy }) => {
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const filteredProducts = filterBy
    ? sortedProducts.filter((product) => product.category === filterBy)
    : sortedProducts;

  return (
    <div className="products-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
