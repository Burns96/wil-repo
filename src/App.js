import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [page, setPage] = useState('Home');

  useEffect(() => {
    document.title = `${page} Page`;
  }, [page]);

  return (
    <div className="site-container">
      <Header setPage={setPage} />
      <main className="content">
        {page === 'Home' && <Home />}
        {page === 'ContactUs' && <ContactUs />}
        {page === 'Faq' && <Faq />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
