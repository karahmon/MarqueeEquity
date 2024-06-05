import React, { useState } from 'react';
import SearchBar from '../components/Searchbar';
import BookCard from '../components/BookCard';

const SearchPage = ({ onAddToBookshelf, bookshelf }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    if (query.length < 3) {
      setSearchResults([]);
      return;
    }
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
    const data = await response.json();
    setSearchResults(data.docs);
  };

  return (
    <div className="search-page">
      <h2>Search by book name:</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="search-results">
        {searchResults.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            onAddToBookshelf={onAddToBookshelf}
            isInBookshelf={bookshelf.some(b => b.key === book.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
