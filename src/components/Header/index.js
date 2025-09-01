import React, { useState } from "react";
import "./index.css";
import { FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Left Button */}
        <button className="manuka-btn">WHICH MANUKA IS FOR ME?</button>

        {/* Left Links */}
        <ul className="nav-links left-links">
          <li>Shop</li>
          <li>Explore</li>
        </ul>

        {/* Logo */}
        <div className="logo">
          <img className="mpl" src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756552598/new_zealand_honey_logo_pqt4s2.svg" alt="NZ Honey Logo" />
        </div>

        {/* Right Links */}
        <ul className="nav-links right-links">
          <li>About</li>
          <li>Rewards</li>
          <li>Contact</li>
        </ul>

        {/* Icons */}
        <div className="icons">
          <FaUser />
          <FaSearch />
          <div className="cart-icon">
            <FaShoppingBag />
            <span className="cart-badge">0</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <button className="manuka-btn">WHICH MANUKA IS FOR ME?</button>
          <ul>
            <li>Shop</li>
            <li>Explore</li>
            <li>About</li>
            <li>Rewards</li>
            <li>Contact</li>
          </ul>
          <div className="icons mobile-icons">
            <FaUser />
            <FaSearch />
            <div className="cart-icon">
              <FaShoppingBag />
              <span className="cart-badge">0</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;