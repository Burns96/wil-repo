// Navigation.js
import React from 'react';

const Navigation = ({ setPage }) => {
  const handleItemClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className="navigation">
      <a href="#home" onClick={() => handleItemClick('Home')}>Home</a>
      <a href="#faq" onClick={() => handleItemClick('Faq')}>FAQ</a>
      <a href="#contact" onClick={() => handleItemClick('ContactUs')}>Contact Us</a>
      {/* Additional links can be added here */}
    </div>
  );
};

export default Navigation;
