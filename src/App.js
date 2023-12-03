import React from 'react'
import Home from './pages/Home'
import Faq from './pages/Faq'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom' 

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App