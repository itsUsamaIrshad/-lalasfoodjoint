import React, { useState, useEffect } from 'react';
import logoImg from '../assets/lala_logo.png';

const Navbar = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => handleLinkClick('home')}>
          <img src={logoImg} alt="Lala's Food Joint" className="navbar__logo-img" />
        </div>
        <ul className={`navbar__links ${isMenuOpen ? 'open' : ''}`} id="nav-links">
          <li>
            <a 
              onClick={() => handleLinkClick('home')} 
              className={currentPage === 'home' ? 'active' : ''}
              id="nav-home"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              onClick={() => handleLinkClick('menu')} 
              className={currentPage === 'menu' ? 'active' : ''}
              id="nav-menu"
            >
              Menu
            </a>
          </li>
          <li>
            <a 
              onClick={() => handleLinkClick('contact')} 
              className={currentPage === 'contact' ? 'active' : ''}
              id="nav-contact"
            >
              Contact
            </a>
          </li>
          <li>
            <a onClick={() => handleLinkClick('menu')} className="nav-order-btn">
              Order Now
            </a>
          </li>
        </ul>
        <button 
          className={`navbar__burger ${isMenuOpen ? 'open' : ''}`} 
          id="burger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
