import React from 'react'

function Searched2({ filters, onFilterChange }) {
  return (
    <div>
      <input
                type="text"
                name="address"
                placeholder="Filter by address"
                value={filters.address}
                onChange={onFilterChange}
            />
            {/* Uncomment and use the following input if filtering by price is needed */}
            {/* <input
                type="number"
                name="price"
                placeholder="Filter by price"
                value={filters.price}
                onChange={onFilterChange}
            /> */}
            <input
                type="text"
                name="type"
                placeholder="Filter by type"
                value={filters.type}
                onChange={onFilterChange}
            />
            {/* Uncomment and use the following input if filtering by bedrooms is needed */}
            {/* <input
                type="text"
                name="bedrooms"
                placeholder="Filter by no : of bedrooms"
                value={filters.bedrooms}
                onChange={onFilterChange}
            /> */}
    </div>
  )
}

export default Searched2
