import React from 'react';

const Sort = ({ updateSortOrder, sortOrder }) => {
  return (
    <div className="sort-container">
      <label htmlFor="sort-select">Sort by Rating:</label>
      <select id="sort-select" value={sortOrder} onChange={(e) => updateSortOrder(e.target.value)}>
        <option value="">Select sorting</option>
        <option value="desc">High to Low</option>
        <option value="asc">Low to High</option>
      </select>
    </div>
  );
};

export default Sort;
