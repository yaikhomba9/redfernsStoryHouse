// components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Redfern Storyhouse</h3>
            <p>Your premier destination for children's books that inspire imagination and foster a love for reading.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Storybook Lane, Imagination City</p>
            <p><i className="fas fa-phone"></i> (555) 123-4567</p>
            <p><i className="fas fa-envelope"></i> info@redfernstoryhouse.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Redfern Storyhouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;