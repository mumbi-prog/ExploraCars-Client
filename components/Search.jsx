import React, { useState, useEffect } from 'react';

const Search = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onSearchChange(searchQuery);
  }, [searchQuery, onSearchChange]);

  return null;
};

export default Search;
