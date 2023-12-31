import React from 'react';
import './TopBar.css'; 

const TopBar = () => {
  return (
    <div className="top-bar">
      <img src="city_logo.png" alt="City Logo" />
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <button>Translate</button>
    </div>
  );
};

export default TopBar;
