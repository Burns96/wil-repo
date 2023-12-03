import React from 'react';
import './Footer.css'; // Assume CSS specific to this component is stored here

const Footer = () => {
  return (
    <div className="footer">
      <div>Resources</div>
      <div>Departments</div>
      <div>Boards & Commissions</div>
      <div>Visit Us</div>
      <div className="social-media">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        {/* More social media links here */}
      </div>
    </div>
  );
};

export default Footer;
