import React, { useState } from 'react';
import './Header.css';

const Header = ({ setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = (pageName) => {
    setPage(pageName);
    setIsMobileMenuOpen(false); // Close the mobile menu on item click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu
  };

  return (
    <header className="header-container">
      <div className="top-bar">
        <img src="city_logo.png" alt="City Logo" />
        {/* Include the translate button within the top bar */}
        <button className="translate-button">Translate</button>
        {/* Toggle button for mobile view */}
        <button className="nav-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {/* Search container accessible on mobile */}
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      {/* Toggle navigation for mobile */}
      <nav className={`navigation ${isMobileMenuOpen ? 'show' : ''}`}>
        <a href="#home" onClick={() => handleItemClick('Home')}>Home</a>
        <a href="#faq" onClick={() => handleItemClick('Faq')}>FAQ</a>
        <a href="#contact" onClick={() => handleItemClick('ContactUs')}>Contact Us</a>
        {/* Additional links can be added here */}
      </nav>
    </header>
  );
};

export default Header;
