import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Header = () => {
  return (
    <header>
      <h1>XxxCams.org</h1>
      <nav>
        <Link to="/admin">Admin Panel</Link>
      </nav>
    </header>
  );
};

export default Header;
