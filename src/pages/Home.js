import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; 
import AOS from "aos";
import "aos/dist/aos.css";

import firstImage from "../assets/styles/Screenshot (72).png";
import secondImage from "../assets/styles/two.webp";
import thirdImage from "../assets/styles/three.webp";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products).slice(0, 4);

  const images = [firstImage, secondImage, thirdImage];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Image changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
         
         
      {/* Categories Section */}
      <section className="categories">
        <h2 data-aos="fade-up">Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card" data-aos="zoom-in">📱 Electronics</div>
          <div className="category-card" data-aos="zoom-in">👗 Fashion</div>
          <div className="category-card" data-aos="zoom-in">🏠 Home & Living</div>
          <div className="category-card" data-aos="zoom-in">🎮 Gaming</div>
        </div>
      </section>


      {/* Hero Section
      <section className="hero" data-aos="fade-in">
        <h1>Discover the Best Deals</h1>
        <p>Get the latest products at the best prices. Shop now!</p>
        <br/>
        <Link to="/products" className="btn">Shop Now</Link>
      </section> */}

      {/* Advertisement Section (Only First Image Clickable) */}
      <section className="advertisement-section">
        <img 
          src={images[currentImage]} 
          alt="Advertisement" 
          className="ad-image" 
          style={{ cursor: currentImage === 0 ? "pointer" : "default" }} 
          onClick={() => {
            if (currentImage === 0) {
              navigate("/products");
            }
          }}
        />
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2 data-aos="fade-up">Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" data-aos="fade-up">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <br/>
              <button 
                onClick={() => dispatch(addToCart(product))}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 data-aos="fade-up">What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card" data-aos="fade-right">⭐️⭐️⭐️⭐️⭐️ "Amazing quality!" - Alice</div>
          <div className="testimonial-card" data-aos="fade-up">⭐️⭐️⭐️⭐️ "Fast delivery, great prices!" - Bob</div>
          <div className="testimonial-card" data-aos="fade-left">⭐️⭐️⭐️⭐️⭐️ "Best shopping experience!" - Charlie</div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2 data-aos="fade-up">Stay Updated</h2>
        <p>Sign up for our newsletter to get the latest deals.</p>
        <br />
        <input type="email" placeholder="Enter your email" />{" "}
        <button className="newsletter-btn">Subscribe</button>
      </section>
    </div>
  );
};

export default Home;
