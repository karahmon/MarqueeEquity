import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by book name"
        value={query}
        onChange={handleChange}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
