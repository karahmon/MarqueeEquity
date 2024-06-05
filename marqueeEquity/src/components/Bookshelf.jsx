import React from 'react';

const Bookshelf = ({ books }) => (
  <div className="bookshelf">
    {books.map((book, index) => (
      <div key={index} className="bookshelf-book">
        <h3>Book Title: {book.title}</h3>
        <p>Edition Count: {book.edition_count}</p>
      </div>
    ))}
  </div>
);

export default Bookshelf;
  