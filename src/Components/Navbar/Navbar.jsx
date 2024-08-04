import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
        <h1 className='logo'>Ashwin.</h1>
      <ul>
        <li className='info'>Home</li>
        <li className='info'>About</li>
        <li className='info'>Resume</li>
        <li className='info'>Skills</li>
        <li><button className='button'>Contact</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
