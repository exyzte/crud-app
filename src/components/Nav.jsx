import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import'../CSS/main.css'

function Nav() {
  return (
    <header>
      <Link to="/"><h1 className="logo">Wayra</h1></Link>
    <nav className="navbar">
      <NavLink to="/posts" className="navlink">posts</NavLink>
      <NavLink to="/about" className="navlink">about</NavLink>
      <NavLink to="/contact" className="navlink contact"><img src="" alt="user-icon" />User</NavLink>
    </nav>
    </header>
  )
}

export default Nav
