import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";


const Logo = () => (
<div className="logo-wrap">
  <Link to="/">
    <img src={logo} alt="IronBat Logo" className="logo-image" />
  </Link>
</div>
)


const active = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <Logo />
      
           <button 
  className={`hamburger ${isOpen ? 'open' : ''}`} 
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle navigation"
>
  <span className="bar"></span>
  <span className="bar"></span>
  <span className="bar"></span>
</button>


      
      <nav className={isOpen ? 'nav-open' : ''}>
        <ul className="nav-list">
          <li><NavLink to="/" end className={active}>Home</NavLink></li>
          <li><NavLink to="/shop" className={active}>Shop</NavLink></li>
          <li><NavLink to="/features" className={active}>Features</NavLink></li>
          <li><NavLink to="/about" className={active}>About</NavLink></li>
          <li><NavLink to="/testimonials" className={active}>Testimonials</NavLink></li>
          <li><NavLink to="/contact" className={active}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
