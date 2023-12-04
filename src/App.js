import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [page, setPage] = useState('Home');
  const [language, setLanguage] = useState('en'); // Initialize language state

  useEffect(() => {
    document.title = `${page} Page`;
  }, [page]);

  return (
    <div className="site-container">
      <Header setPage={setPage} setLanguage={setLanguage} /> {/* Pass setLanguage to Header */}
      <main className="content">
        {page === 'Home' && <Home language={language} />} {/* Pass language to Home */}
        {page === 'ContactUs' && <ContactUs language={language} />} {/* Pass language to ContactUs */}
        {page === 'Faq' && <Faq language={language} />} {/* Pass language to Faq */}
      </main>
      <Footer language={language} /> {/* Pass language to Footer */}
    </div>
  );
};

export default App;
