import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('.nav');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">
          
        </div>
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-links"><Link to="/">Home</Link></li>
          <li className="nav-links"><Link to="/About">About</Link></li>
          <li className="nav-links"><Link to="/Contact">Contact</Link></li>
          <li className="nav-links"><Link to="/Projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
