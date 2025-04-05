import React from "react";
import "../styles/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome Icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>

        <div className="footer-section">
          <h3>Consumer Policy</h3>
          <p>Return Policy</p>
          <p>Terms of Use</p>
          <p>Security</p>
          <p>Privacy</p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2025 MyShop. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
