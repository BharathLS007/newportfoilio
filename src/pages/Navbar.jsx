import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function Navbar() {
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

  return (
    <div className='nav'>
      <ul className='menu'>
        <li className='nav-links'><Link to="/">Home</Link></li>
        <li className='nav-links'><Link to="/About">About</Link></li>
        <li className='nav-links'><Link to="/Contact">Contact</Link></li>
        <li className='nav-links'><Link to="/Projects">Projects</Link></li>
      </ul>
    </div>
  );
}

export default Navbar
