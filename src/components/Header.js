import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav>
      <h1>ShopClone</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
}

export default Header;
