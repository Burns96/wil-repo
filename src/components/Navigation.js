import React from 'react';
import './Navigation.css';

// Updated to accept `texts` prop
const Navigation = ({ setPage, texts }) => {
  const handleItemClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className="navigation">
      <a href="#home" onClick={() => handleItemClick('Home')}>{texts.home}</a>
      <a href="#faq" onClick={() => handleItemClick('Faq')}>{texts.faq}</a>
      <a href="#contact" onClick={() => handleItemClick('ContactUs')}>{texts.contactUs}</a>
      {/* Additional links can be added here, using texts from the `texts` prop */}
    </div>
  );
};

export default Navigation;
