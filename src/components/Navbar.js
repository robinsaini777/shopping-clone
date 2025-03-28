import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux"; // Redux se cart state access karne ke liye

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); // Cart items ko Redux se fetch kar rahe hain
  return (
    <nav className="navbar">
      <div className="logo"> ꧁༺ 𝓜𝔂𝓼𝓱𝓸𝓹.𝓬𝓸𝓶 ༻꧂ </div>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button><FaSearch /></button>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
          <Link to="/cart">
            Cart 🛒 <span className="cart-count">({cartItems.length})</span>
          </Link>
        </li>
        <li><Link to="/login"><FaUser /> Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


