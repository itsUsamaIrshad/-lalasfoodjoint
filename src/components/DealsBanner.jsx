import React, { useEffect, useRef } from 'react';

const DealsBanner = ({ onNavigate }) => {
  const contentRef = useRef(null);
  const pillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    if (contentRef.current) observer.observe(contentRef.current);
    pillsRef.current.forEach(pill => pill && observer.observe(pill));

    return () => observer.disconnect();
  }, []);

  const deals = [
    { name: "The Knockout Deal", price: "$21.99", desc: "1 Burger + Regular Fries + Can + Sauce", delay: "0.0s" },
    { name: "The Mighty Deal", price: "$45.99", desc: "2 Burgers + Large Fries + 2 Cans + 4 Wings", delay: "0.1s" },
    { name: "Friends Deal", price: "$67.99", desc: "3 Burgers + Fries + Nuggets + Wings + 1.25L", delay: "0.2s" },
    { name: "Family Deal", price: "$92.99", desc: "4 Burgers + Fries + Rings + Nuggets + Wings", delay: "0.3s" },
  ];

  return (
    <section className="deals-banner">
      <div className="deals-banner__inner">
        <div className="reveal" ref={contentRef}>
          <div className="section-tag">Special Deals</div>
          <h2>SAVE BIG WITH<br/><span className="deals-banner__hl">LALA'S DEALS</span></h2>
          <p style={{ marginTop: '12px' }}>From solo knockout deals to family feasts — we've got you covered every night of the week.</p>
          <a className="btn-black" style={{ marginTop: '24px', display: 'inline-block' }} onClick={() => onNavigate('menu', 'deals')}>View All Deals</a>
        </div>
        <div className="deals-banner__cards">
          {deals.map((deal, index) => (
            <div 
              key={index} 
              className="deal-pill reveal" 
              style={{ animationDelay: deal.delay }}
              onClick={() => onNavigate('menu', 'deals')}
              ref={el => pillsRef.current[index] = el}
            >
              <span className="deal-pill__price">{deal.price}</span>
              <div>
                <span className="deal-pill__name">{deal.name}</span>
                <span className="deal-pill__desc">{deal.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsBanner;
