import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="/" className="social-icon-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="social-icon-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="social-icon-link">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <nav className="footer-nav">
        <ul className="footer-links">
          <li className="footer-link-item">
            <a href="/" className="footer-link">Курсы</a>
          </li>
          <li className="footer-link-item">
            <a href="/" className="footer-link">Мастера</a>
          </li>
          <li className="footer-link-item">
            <a href="/" className="footer-link">О нас</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;