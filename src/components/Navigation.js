// Navigation.js
import React from 'react';

const Navigation = ({ setPage }) => {
  const handleItemClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className="navigation">
      <a href="#" onClick={() => handleItemClick('Home')}>Home</a>
      <a href="#" onClick={() => handleItemClick('Contact')}>Contact Us</a>
      <a href="#" onClick={() => handleItemClick('Faq')}>FAQ</a>
      <a href="#" onClick={() => handleItemClick('Login')}>Login</a>
    </div>
  );
};

export default Navigation;