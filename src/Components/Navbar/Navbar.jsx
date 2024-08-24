import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Ashwin.</h1>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className="info"><Link to="/">Home</Link></li>
          <li className="info"><Link to="/resume">Resume</Link></li>
          <li className="info"><Link to="/project">Projects</Link></li>
          <li><Link to="/contact" className="button">Contact Me</Link></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;