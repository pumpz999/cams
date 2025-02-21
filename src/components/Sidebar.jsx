import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const categories = [
    'Blonde', 'Brunette', 'Redhead', 'Asian', 
    'Latina', 'Ebony', 'Mature', 'Lesbian', 
    'Gay', 'Fetish', 'Couples', 'Trans'
  ];

  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category.toLowerCase()}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
