import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <button className="menu-toggle">
          <FaBars />
        </button>
        <h1>XxxCams.org</h1>
      </div>
    </header>
  );
};

export default Header;
