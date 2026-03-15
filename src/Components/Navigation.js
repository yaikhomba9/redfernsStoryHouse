import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Css/Navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home', path: '/' },
    { id: 'books', label: 'Books', icon: 'fas fa-book', path: '/books' },
    { id: 'categories', label: 'Categories', icon: 'fas fa-list', path: '/categories' },
    { id: 'about', label: 'About Us', icon: 'fas fa-info-circle', path: '/about' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope', path: '/contact' }
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false); // Close menu when switching to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.navContainer}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu when route changes
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navigation Menu */}
        <div 
          className={`${styles.menuContainer} ${isMenuOpen ? styles.menuOpen : ''}`}
        >
          <ul className={styles.menuList}>
            {menuItems.map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
                  }
                  onClick={handleNavClick}
                >
                  <i className={`${item.icon} ${styles.menuIcon}`}></i>
                  <span className={styles.menuLabel}>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;