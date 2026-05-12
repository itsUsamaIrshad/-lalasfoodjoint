import React, { useEffect, useRef } from 'react';

const About = () => {
  const visualRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    if (visualRef.current) observer.observe(visualRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__visual-wrap reveal" ref={visualRef}>
          <div className="about__circle">
            <div className="about__emojis">🍔🌯🍟</div>
            <div className="about__open">
              <div className="about__open-inner"><strong>OPEN</strong><span>5 PM</span><span>–4 AM</span></div>
            </div>
          </div>
        </div>
        <div className="reveal" ref={contentRef}>
          <div className="section-tag">About Us</div>
          <h2 className="about__title">LALA'S<br/><span>FOOD JOINT</span></h2>
          <p className="about__text">Nestled in the heart of Fawkner, Lala's Food Joint is the go-to late-night burger and wrap destination. Open 7 nights a week from 5 PM to 4 AM, we serve bold, flavour-packed burgers, wraps, sides and deals that hit the spot every time.</p>
          <p className="about__text">From our signature <strong>Lala's Special Burger</strong> stacked with Angus and grilled chicken, to our authentic <strong>Pure Pakistani Style Shami Burger</strong> — every item is crafted fresh to order with love.</p>
          <div className="about__stats">
            <div className="about__stat"><strong>20+</strong><span>Menu items</span></div>
            <div className="about__stat"><strong>7</strong><span>Days a week</span></div>
            <div className="about__stat"><strong>11hrs</strong><span>Daily service</span></div>
          </div>
          <a className="about__phone" href="tel:0413498115">📞 0413 498 115</a>
          <span className="about__addr">📍 32 Bonwick St, Fawkner VIC 3060</span>
        </div>
      </div>
    </section>
  );
};

export default About;
