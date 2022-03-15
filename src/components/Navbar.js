import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import danielLogo from '../Daniel-Balloi.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to="/">
          <img src={logo} className='logo'></img>  
        </Link>
        </div>    
    <ul className='nav-links'>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">
          About Me
        </Link>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar
