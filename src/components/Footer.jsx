import React from 'react';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="footer__stripe"></div>
      <div className="footer__inner">
        <div className="footer__col">
          <div className="footer__logo-circle" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            <span className="footer__logo-text">LALA'S</span>
            <span className="footer__logo-sub">FOOD JOINT</span>
          </div>
          <p className="footer__tagline">Lala feels your hunger.</p>
          <div className="footer__hours-row">
            <span className="open-badge">OPEN NOW</span>
            <span>Every Night 5 PM – 4 AM</span>
          </div>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a onClick={() => onNavigate('home')}>Home</a></li>
            <li><a onClick={() => onNavigate('menu')}>Full Menu</a></li>
            <li><a onClick={() => onNavigate('contact')}>Contact Us</a></li>
            <li><a href="tel:0413498115">Call to Order</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <div className="footer__info-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>32 Bonwick St,<br/>Fawkner, VIC 3060</span>
          </div>
          <div className="footer__info-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>0413 498 115</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span>© {new Date().getFullYear()} Lala's Food Joint. All rights reserved.</span>
          <span>Open Every Single Night Until 4 AM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
