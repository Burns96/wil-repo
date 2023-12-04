import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const handleLinkClick = (e, socialMediaName) => {
    e.preventDefault(); // Prevent the default link action
    alert(`Link to ${socialMediaName} will be added soon.`);
  };

  return (
    <div className="footer">
      <div>Resources</div>
      <div>Departments</div>
      <div>Boards & Commissions</div>
      <div>Visit Us</div>
      <div className="social-media">
        <a href="#" onClick={(e) => handleLinkClick(e, 'Facebook')} className="fab fa-facebook-f">
        </a>
        <a href="#" onClick={(e) => handleLinkClick(e, 'Twitter')} className="fab fa-twitter">
        </a>
        <a href="#" onClick={(e) => handleLinkClick(e, 'Instagram')} className="fab fa-instagram">
        </a>
      </div>
    </div>
  );
};

export default Footer;