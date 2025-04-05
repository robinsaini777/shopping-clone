import React from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products"; // Sample product data
import "../styles/CategoryPage.css";

const CategoryPage = () => {
  const { name } = useParams();

  // Filter products based on category
  const filteredProducts = productData.filter(
    (product) => product.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="category-container">
      <h2>{name.toUpperCase()} Products</h2>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
