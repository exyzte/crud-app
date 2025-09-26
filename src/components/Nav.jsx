import userIcon from '../assets/user-icon.svg'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import'../CSS/main.css'

function Nav() {
  return (
    <header>
      <Link className="navlink" to="/"><h1 className="logo">Wayra</h1></Link>
    <nav className="navbar">
      <NavLink to="/Posts" className="navlink">Posts</NavLink>
      <NavLink to="/About" className="navlink about">About</NavLink>
      <NavLink to="/Contact" className="navlink contact"><img src={userIcon} className='user-icon' alt="user-icon" />User</NavLink>
    </nav>
    </header>
  )
}

export default Nav
