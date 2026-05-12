import React, { useEffect, useState, useRef } from 'react';
import { menuData, menuCategories } from '../data/menuData';

const Menu = ({ initialCategory }) => {
  const [activeCat, setActiveCat] = useState('special');
  const sectionRefs = useRef({});

  useEffect(() => {
    if (initialCategory) {
      scrollToSection(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(sectionRefs.current);
      let current = '';
      sections.forEach(sec => {
        if (sec) {
          const top = sec.getBoundingClientRect().top;
          if (top < 200) current = sec.id.replace('msec-', '');
        }
      });
      if (current) setActiveCat(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (catId) => {
    const el = sectionRefs.current[catId];
    if (el) {
      const offset = 150;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setActiveCat(catId);
  };

  return (
    <div id="page-menu">
      <div className="menu-hdr">
        <div className="menu-hdr__inner">
          <div className="menu-hdr__lbl">LALA'S FOOD JOINT</div>
          <h1 className="menu-hdr__title">OUR<br/><span>MENU</span></h1>
          <p className="menu-hdr__sub">Everything made fresh. Every night. 5 PM – 4 AM.</p>
        </div>
      </div>
      <div className="menu-stripe"></div>

      <div className="menu-cat-nav">
        <div className="menu-cat-nav__inner" id="menu-cat-nav">
          {menuCategories.map(cat => (
            <button 
              key={cat.id}
              className={`cat-btn ${activeCat === cat.id ? 'active' : ''}`} 
              data-cat={cat.id} 
              onClick={() => scrollToSection(cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-content" id="menu-content">
        {menuCategories.map(cat => (
          <section 
            key={cat.id} 
            className="menu-section" 
            id={`msec-${cat.id}`}
            ref={el => sectionRefs.current[cat.id] = el}
          >
            <div className="menu-section-hdr" style={{ borderColor: menuData[cat.id]?.[0]?.accent || 'var(--red)' }}>
              <span className="menu-section-icon">{cat.icon}</span>
              <h2 className="menu-section-title" style={{ color: menuData[cat.id]?.[0]?.accent || 'var(--red)' }}>
                {cat.name.toUpperCase()}
              </h2>
              <div className="menu-section-line" style={{ background: menuData[cat.id]?.[0]?.accent || 'var(--red)' }}></div>
            </div>
            <div className={`menu-grid ${cat.id === 'deals' ? 'deals-grid' : cat.id === 'sauces' ? 'sauce-grid' : ''}`}>
              {menuData[cat.id]?.map((item, index) => (
                <div 
                  key={index} 
                  className={`menu-item ${cat.id === 'deals' ? 'deal-item' : ''}`}
                  style={{ '--item-accent': item.accent }}
                >
                  <div className="menu-item-body">
                    <div className="menu-item-top">
                      <div className="menu-item-name-group">
                        <h3 className="menu-item-name">{item.name}</h3>
                        {item.badge && <span className="menu-item-badge" style={{ background: item.accent || 'var(--red)' }}>{item.badge}</span>}
                      </div>
                      <span className="menu-item-price" style={{ color: item.accent || 'var(--red)' }}>
                        {item.price}
                      </span>
                    </div>
                    <p className="menu-item-desc">{item.desc}</p>
                    {item.serves && (
                      <div className="deal-serves" style={{ borderColor: item.accent, color: item.accent }}>
                        {item.serves}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="menu-footer-note">
        <p>🕔 Open 7 Days a Week · 5 PM – 4 AM</p>
        <p>📍 32 Bonwick St, Fawkner VIC 3060 &nbsp;·&nbsp; 📞 0413 498 115</p>
        <p className="sm">* Extra sauce $0.50 each · Prices include GST · Menu subject to change</p>
      </div>
    </div>
  );
};

export default Menu;
