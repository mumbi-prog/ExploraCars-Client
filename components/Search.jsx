import React, { useState, useEffect } from 'react';

const Search = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    onSearchChange(searchQuery);
  }, [searchQuery, onSearchChange]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by make"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;