import React from 'react';
import './Navigation.css';


const Navigation = ({ setPage, texts }) => {
  const handleItemClick = (pageName) => {
    setPage(pageName);
  };

  return (
    <div className="navigation">
      <a href="#home" onClick={() => handleItemClick('Home')}>{texts.home}</a>
      <a href="#faq" onClick={() => handleItemClick('Faq')}>{texts.faq}</a>
      <a href="#contact" onClick={() => handleItemClick('ContactUs')}>{texts.contactUs}</a>
      <a href="#login" onClick={() => handleItemClick('Login')}>{texts.login}</a>
    </div>
  );
};

export default Navigation;
