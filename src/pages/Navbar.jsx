import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
      
         <ul className='menu'>
            <li className='nav-links'><Link to="/">Home</Link></li>
            <li className='nav-links'><Link to="/About">About</Link></li>
            <li className='nav-links'><Link to="/Contact">Contact</Link></li>
            <li className='nav-links'><Link to="/Projects">Projects</Link></li>

         </ul>

    </div>
  )
}

export default Navbar
