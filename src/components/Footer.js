import React, { useState, useEffect } from 'react';
import { translateText } from './Translate'; // Adjust the path as necessary
import './Footer.css'; 

const Footer = ({ language }) => {
  const [resources, setResources] = useState('Resources');
  const [departments, setDepartments] = useState('Departments');
  const [boardsCommissions, setBoardsCommissions] = useState('Boards & Commissions');
  const [visitUs, setVisitUs] = useState('Visit Us');
  const [socialMediaMessage, setSocialMediaMessage] = useState('Link to {socialMediaName} will be added soon.');

  useEffect(() => {
    translateText('Resources', language).then(translation => setResources(translation));
    translateText('Departments', language).then(translation => setDepartments(translation));
    translateText('Boards & Commissions', language).then(translation => setBoardsCommissions(translation));
    translateText('Visit Us', language).then(translation => setVisitUs(translation));
    translateText('Link to {socialMediaName} will be added soon.', language).then(translation => setSocialMediaMessage(translation));
  }, [language]);

  const handleLinkClick = (e, socialMediaName) => {
    e.preventDefault(); // Prevent the default link action
    alert(socialMediaMessage.replace('{socialMediaName}', socialMediaName));
  };

  return (
    <div className="footer">
      <div>{resources}</div>
      <div>{departments}</div>
      <div>{boardsCommissions}</div>
      <div>{visitUs}</div>
      <div className="social-media">
        <a href="#" onClick={(e) => handleLinkClick(e, 'Facebook')} className="fab fa-facebook-f"></a>
        <a href="#" onClick={(e) => handleLinkClick(e, 'Twitter')} className="fab fa-twitter"></a>
        <a href="#" onClick={(e) => handleLinkClick(e, 'Instagram')} className="fab fa-instagram"></a>
      </div>
    </div>
  );
};

export default Footer;
