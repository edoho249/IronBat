import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { useCart } from "../CartContext";
import Cart from './Cart';

const Logo = () => (
  <div className="logo-wrap">
    <Link to="/">
      <img src={logo} alt="IronBat Logo" className="logo-image" />
    </Link>
  </div>
);

const active = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

export default function Header() {
  const { cartItems, setCartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="site-header">
      <Logo />

    
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className="nav-cart-wrapper">
        <nav className={isOpen ? "nav-open" : ""}>
          <ul className="nav-list">
            <li>
              <NavLink to="/" end className={active} onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={active} onClick={() => setIsOpen(false)}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" className={active} onClick={() => setIsOpen(false)}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={active} onClick={() => setIsOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className={active} onClick={() => setIsOpen(false)}>
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={active} onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>


        <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
          🛒 {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
      </div>

      {showCart && (
        <div className="cart-wrapper">
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={() => setShowCart(false)}
          />
        </div>
      )}
    </header>
  );
}
