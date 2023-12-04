import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Header from './components/Header';
import Footer from './components/Footer';
import { translateText } from './components/Translate'; // Make sure the path is correct
import './App.css';

const App = () => {
  const [page, setPage] = useState('Home');
  const [language, setLanguage] = useState('en'); // Initialize language state
  const [navTexts, setNavTexts] = useState({
    home: 'Home',
    faq: 'FAQ',
    contactUs: 'Contact Us'
    // Add more navigation items as needed
  });

  useEffect(() => {
    document.title = `${page} Page`;

    const translateNav = async () => {
      const translatedHome = await translateText('Home', language);
      const translatedFaq = await translateText('FAQ', language);
      const translatedContactUs = await translateText('Contact Us', language);
      setNavTexts({ home: translatedHome, faq: translatedFaq, contactUs: translatedContactUs });
    };

    translateNav();
  }, [language]);

  return (
    <div className="site-container">
      <Header setPage={setPage} setLanguage={setLanguage} texts={navTexts} />
      <main className="content">
        {page === 'Home' && <Home language={language} />}
        {page === 'ContactUs' && <ContactUs language={language} />}
        {page === 'Faq' && <Faq language={language} />}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;
