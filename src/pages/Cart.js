import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice"; 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Start shopping now!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
