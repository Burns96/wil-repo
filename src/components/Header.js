import React, { useState } from 'react';
import Navigation from './Navigation'; // Adjust the import path as necessary
import './Header.css';

const Header = ({ setPage, setLanguage, texts }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu
  };

  // Function to handle language change
  const handleLanguageChange = (language) => {
    setLanguage(language); // Update the language in App.js
  };

  return (
    <header className="header-container">
      <div className="top-bar">
        <img src="city_logo.png" alt="City Logo" />
        <select className="language-selector" onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">French</option>
          {/* Add more languages as needed */}
        </select>
        <button className="nav-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <Navigation setPage={setPage} texts={texts} />
    </header>
  );
};

export default Header;
