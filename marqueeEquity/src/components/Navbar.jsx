import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Search Books</Link>
    <Link to="/bookshelf">My Bookshelf</Link>
  </nav>
);

export default Navbar;
