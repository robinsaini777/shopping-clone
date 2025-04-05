import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [showDropdown, setShowDropdown] = useState(false);

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

        {/* Categories Dropdown with Hover */}
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


// import React from "react";
// import "../styles/Navbar.css";
// import { Link } from "react-router-dom";
// import { FaSearch, FaUser } from "react-icons/fa";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   return (
//     <nav className="navbar">
//       <div className="logo"> ꧁༺ 𝓜𝔂𝓼𝓱𝓸𝓹.𝓬𝓸𝓶 ༻꧂ </div>
//       <div className="search-bar">
//         <input type="text" placeholder="Search products..." />
//         <button><FaSearch /></button>
//       </div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         <li>
//           <Link to="/cart">
//             Cart 🛒 <span className="cart-count">({cartItems.length})</span>
//           </Link>
//         </li>
//         <li><Link to="/login"><FaUser /> Login</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


