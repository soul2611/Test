import React, { useState } from 'react';
import ProductsList from './ProductsList';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      category: 'Category 1',
      image: 'https://example.com/product1.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      category: 'Category 2',
      image: 'https://example.com/product2.jpg', // Replace with actual image URL
    },
    // Add more products with image URLs
  ]);

  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const handleSort = (value) => {
    setSortBy(value);
  };

  const handleFilter = (value) => {
    setFilterBy(value);
  };

  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="filtering-section">
        <button onClick={() => handleSort('price')}>Sort by Price</button>
        <button onClick={() => handleSort('category')}>Sort by Category</button>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>

        </select>
      </div>
      <ProductsList products={products} sortBy={sortBy} filterBy={filterBy} />
    </div>
  );
};

export default App;
