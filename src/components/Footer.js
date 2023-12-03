  import React from 'react'
  import { Navbar } from 'reactstrap'

function Footer() {
  return (
    <>
        <Navbar 
            className='navbar-footer' 
            fixed="bottom" 
            color='info'
        >
            <p id='footer-text'>&copy; name of team </p>
        <div className="footer">
      <div>Resources</div>
      <div>Departments</div>
      <div>Boards & Commissions</div>
      <div>Visit Us</div>
      <div className="social-media">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
      </div>
    </div>
        </Navbar>
    </>
  )
}

export default Footer