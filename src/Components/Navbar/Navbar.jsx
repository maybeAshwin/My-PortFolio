import React from 'react'
import './Navbar.css'
import {Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
        <h1 className='logo'>Ashwin.</h1>
      <ul>
        <li className='info'>Home</li>
        <li className='info' ><Link to = '/resume'>Resume</Link></li>
        <li><button className='button'><Link to ='/contact'>Contact Me</Link></button></li>
      </ul>
    </nav>
  )
}

export default Navbar
