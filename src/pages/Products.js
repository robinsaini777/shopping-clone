import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; 
import "../styles/Products.css";


const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <br/>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;

