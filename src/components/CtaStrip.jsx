import React, { useEffect, useRef } from 'react';

const CtaStrip = ({ onNavigate }) => {
  const textRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    if (textRef.current) observer.observe(textRef.current);
    if (actionsRef.current) observer.observe(actionsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-strip">
      <div className="cta-strip__inner">
        <div className="reveal" ref={textRef}>
          <h2>HUNGRY? WE'RE OPEN<br/>UNTIL 4 AM!</h2>
          <p>Come in or call ahead — Lala's is always ready for you.</p>
        </div>
        <div className="cta-strip__actions reveal" ref={actionsRef}>
          <a className="btn-black" onClick={() => onNavigate('menu')}>Browse Menu</a>
          <a className="btn-red" href="tel:0413498115">📞 0413 498 115</a>
        </div>
      </div>
    </section>
  );
};

export default CtaStrip;
