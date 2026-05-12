import React from 'react';
import heroImg from '../assets/hero_img.png';
import chilliImg from '../assets/redchilli.png';
import friesImg from '../assets/fries.png';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__tag">🕔 Open 5 PM – 4 AM · 7 Days a Week</div>
          <h1 className="hero__title">
            <span className="hero__lala">LALA'S</span>
            <span className="hero__food">FOOD JOINT</span>
          </h1>
          <p className="hero__tagline">Lala feels your hunger</p>
          <p className="hero__desc">Burgers, wraps, sides & deals crafted with love at Fawkner's favourite late-night food stop. Open every night until 4 AM.</p>
          <div className="hero__ctas">
            <a className="btn-red" onClick={() => onNavigate('menu')}>View Full Menu</a>
            <a className="btn-black" href="tel:0413498115">📞 Call to Order</a>
          </div>
          <div className="hero__addr">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            32 Bonwick St, Fawkner, VIC 3060
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__circle">
            <img src={heroImg} alt="Burger" className="hero__img" />
            <div className="hero__badge">
              <span className="hero__badge-from">FROM</span>
              <span className="hero__badge-price">$13.99</span>
            </div>
          </div>
          <div className="hero__d2"><img src={chilliImg} alt="Chilli" className="hero__deco-img" /></div>
          {/* <div className="hero__d2">⭐</div> */}
          <div className="hero__d1"><img src={friesImg} alt="Fries" className="hero__deco-img" /></div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>SCROLL</span>
        <div className="hero__scroll-arr"></div>
      </div>
    </section>
  );
};

export default Hero;
