import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* ✅ Top Row: Logo + Menu Icon + Cart */}
      <div className="top-row">
        <div className="logo">꧁༺ 𝓜𝔂𝓼𝓱𝓸𝓹.𝓬𝓸𝓶 ༻꧂</div>

        {/* ✅ Menu Icon for mobile */}
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </div>

      {/* ✅ Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button><FaSearch /></button>
      </div>

      {/* ✅ Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>

        {/* ✅ Categories Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="dropbtn">Categories ▼</span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/category/fashion">Fashion</Link></li>
              <li><Link to="/category/electronics">Electronics</Link></li>
              <li><Link to="/category/home-living">Home & Living</Link></li>
              <li><Link to="/category/appliances">Appliances</Link></li>
            </ul>
          )}
        </li>

        {/* ✅ Cart */}
        <li>
          <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
            🛒 Cart <span className="cart-count">({cartItems.length})</span>
          </Link>
        </li>

        {/* ✅ Login */}
        <li><Link to="/login" onClick={() => setIsMenuOpen(false)}><FaUser /> Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
