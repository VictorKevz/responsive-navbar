import React, { useState } from 'react';
import menuIcon from "../assets/icons/menu-icon.svg"
import closeIcon from "../assets/icons/close-icon.svg"
import logo from "../assets/icons/logo.svg"
import "./css/navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src={logo} alt='logo-dev' className='icon'/></div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a className='contact-link' href="#">Contact</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <img src={closeIcon} alt='close-icon' className='icon'/> : <img src={menuIcon} alt='close-icon' className='icon'/>}
      </div>
    </nav>
  );
};

export default Navbar;
