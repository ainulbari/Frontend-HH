import React, { useState } from 'react';

const FilterProduct = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    onFilterChange(newCategory);
  };

  return (
    <div className="filter-product">
      <label htmlFor="category">Filter by Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default FilterProduct;
