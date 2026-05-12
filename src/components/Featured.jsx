import React, { useEffect, useRef } from 'react';

const Featured = ({ onNavigate }) => {
  const headRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    if (headRef.current) observer.observe(headRef.current);
    cardsRef.current.forEach(card => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const featuredItems = [
    { name: "Lala's Special Burger", price: "$17.99", desc: "Extra Grilled Chicken + Angus Patty, Double Cheese, Jalapeños, Hot & Peri-Peri Sauce", emoji: "🍔", tag: "SIGNATURE", badge: "BESTSELLER", badgeBg: "#D32F2F", tagColor: "#D32F2F", delay: "0.0s" },
    { name: "Volcano Wrap", price: "$14.99", desc: "Extra Grilled Chicken, Roasted Bell Pepper, Jalapeños, Hot Sauce & Peri-Peri Sauce", emoji: "🌯", tag: "SPICY 🌶️", badge: "HOT", badgeBg: "#E65100", tagColor: "#E65100", delay: "0.12s" },
    { name: "Shami Burger", price: "$13.99", desc: "Pure Pakistani Style — Special Shami, Egg, Mint Sauce, Hot Sauce & Garlic Aioli", emoji: "🥩", tag: "PAKISTANI", badge: "AUTHENTIC", badgeBg: "#1B5E20", tagColor: "#1B5E20", delay: "0.24s" },
    { name: "Family Deal", price: "$92.99", desc: "4 Burgers + Fries + Rings + Nuggets + Wings + 1.25L Drink + 4 Sauces", emoji: "🎉", tag: "DEAL", badge: "BEST VALUE", badgeBg: "#4A148C", tagColor: "#4A148C", delay: "0.36s" },
  ];

  return (
    <section className="featured">
      <div className="featured__inner">
        <div className="featured__head reveal" ref={headRef}>
          <div className="section-tag">Our Favourites</div>
          <h2 className="featured__title">MUST-TRY<br/><span>ITEMS</span></h2>
          <p style={{ color: 'var(--text-mid)', fontSize: '15px' }}>Handpicked by Lala himself</p>
        </div>
        <div className="featured__grid">
          {featuredItems.map((item, index) => (
            <div 
              key={index} 
              className="feat-card reveal" 
              style={{ animationDelay: item.delay }}
              ref={el => cardsRef.current[index] = el}
            >
              <div className="feat-card__badge" style={{ background: item.badgeBg }}>{item.badge}</div>
              <div className="feat-card__img">{item.emoji}</div>
              <div className="feat-card__body">
                <div className="feat-card__tag" style={{ color: item.tagColor }}>{item.tag}</div>
                <h3 className="feat-card__name">{item.name}</h3>
                <p className="feat-card__desc">{item.desc}</p>
                <span className="price-badge">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="featured__cta reveal" ref={el => cardsRef.current[4] = el}>
          <a className="btn-red" onClick={() => onNavigate('menu')}>See Full Menu →</a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
