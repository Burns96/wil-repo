import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs'; // Import the ContactUs component
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
        {page === 'About' && <About />}
        {page === 'ContactUs' && <ContactUs />} {/* Add the render condition for ContactUs */}
        {/* Additional pages can be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
