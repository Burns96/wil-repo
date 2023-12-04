import React, { useState } from 'react';
import Navigation from './Navigation'; 
import './Header.css';

const Header = ({ setPage, setLanguage, texts }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  };

  
  const handleLanguageChange = (language) => {
    setLanguage(language); 
  };

  return (
    <header className="header-container">
      <div className="top-bar">
        <img src="city_logo.png" alt="City Logo" />
        <select className="language-selector" onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">French</option>
          
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
