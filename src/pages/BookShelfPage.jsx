import React from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = ({ bookshelf }) => (
  <div className="bookshelf-page">
    <h2>My Bookshelf</h2>
    <Bookshelf books={bookshelf} />
  </div>
);

export default BookshelfPage;
