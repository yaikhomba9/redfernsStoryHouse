// components/Navigation.js
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // detects active route

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home', path: '/' },
    { id: 'books', label: 'Books', icon: 'fas fa-book', path: '/books' },
    { id: 'categories', label: 'Categories', icon: 'fas fa-list', path: '/categories' },
    { id: 'about', label: 'About Us', icon: 'fas fa-info-circle', path: '/about' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope', path: '/contact' }
  ];

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </button>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {menuItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <i className={`${item.icon} nav-icon`}></i> {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
