import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="top-row">
        <Link to="/" className="logo">
          ꧁༺ 𝓜𝔂𝓼𝓱𝓸𝓹 ༻꧂
        </Link>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button><FaSearch /></button>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenus}>Home</Link></li>
        <li><Link to="/products" onClick={closeMenus}>Products</Link></li>

        {/* Dropdown */}
        <li className="dropdown">
          <span className="dropbtn" onClick={handleDropdownToggle}>
            Categories ▼
          </span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/category/fashion" onClick={closeMenus}>👗 Fashion</Link></li>
              <li><Link to="/category/electronics" onClick={closeMenus}>📱 Electronics</Link></li>
              <li><Link to="/category/home-living" onClick={closeMenus}>🏠 Home & Living</Link></li>
              <li><Link to="/category/appliances" onClick={closeMenus}>🧺 Appliances</Link></li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/cart" onClick={closeMenus}>
            🛒 Cart <span className="cart-count">({cartItems.length})</span>
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={closeMenus}>
            <FaUser /> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
