import React from "react";
import { useParams } from "react-router-dom";
import categoryProducts from "../data/categoryProducts";
import "../styles/CategoryPage.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const CategoryPage = () => {
  const { name: categoryName } = useParams();
  const dispatch = useDispatch();

  // ✅ Get products for selected category
  const products = categoryProducts[categoryName] || [];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // ✅ If category name or products are invalid
  if (!categoryName || products.length === 0) {
    return <h2 className="category-title">Category not found!</h2>;
  }

  return (
    <div className="category-page">
      <h2 className="category-title">{categoryName.toUpperCase()}</h2>
      <div className="category-products">
        {products.map((product) => (
          <div key={product.id} className="category-product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
