import React from 'react';

const BookCard = ({ book, onAddToBookshelf, isInBookshelf }) => (
  <div className="book-card">
    <h3>Book Title: {book.title}</h3>
    <p>Edition Count: {book.edition_count}</p>
    {!isInBookshelf && (
      <button onClick={() => onAddToBookshelf(book)}>
        Add to Bookshelf
      </button>
    )}
  </div>
);

export default BookCard;
