import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div id="page-contact">
      <div className="contact-hdr">
        <div className="contact-hdr__inner">
          <div className="contact-hdr__lbl">GET IN TOUCH</div>
          <h1 className="contact-hdr__title">CONTACT<br/><span>LALA'S</span></h1>
          <p>Questions? Feedback? Just want to say hi? We're here.</p>
        </div>
      </div>
      <div className="menu-stripe"></div>

      <div className="contact-body">
        <div className="contact-body__inner">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-card__icon">📞</span>
              <div>
                <h3>PHONE</h3>
                <a className="contact-phone" href="tel:0413498115">0413 498 115</a>
                <p>Call ahead for quick pickup</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-card__icon">🕘</span>
              <div>
                <h3>OPENING HOURS</h3>
                <div className="hours-row"><span>Mon – Sun</span><span className="hours-time">5 PM – 4 AM</span></div>
                <p>Open every single night, including public holidays.</p>
              </div>
            </div>
            <div className="info-card dark">
              <span className="info-card__icon">📍</span>
              <div>
                <h3>LOCATION</h3>
                <p>32 Bonwick St,<br/>Fawkner, VIC 3060</p>
                <span>Free parking available on Bonwick St.</span>
              </div>
            </div>
            <div className="map-box">
              <div className="map-inner">
                <span className="map-pin">📍</span>
                <span className="map-name">Lala's Food Joint</span>
                <span className="map-addr">32 Bonwick St, Fawkner VIC 3060</span>
                <a className="btn-red" href="https://www.google.com/maps/dir/?api=1&destination=Lala's+Food+Joint+Fawkner" target="_blank" rel="noreferrer">Open in Maps</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2 className="contact-form-title">SEND A<br/><span>MESSAGE</span></h2>
            
            {isSubmitted ? (
               <div className="contact-success show" id="success-msg">
                <div className="s-icon">✅</div>
                <h3>THANK YOU!</h3>
                <p>Your message has been sent to Lala. We'll get back to you soon.</p>
                <button className="btn-black" style={{ marginTop: '20px' }} onClick={() => setIsSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="cform" id="contact-form" onSubmit={handleSubmit}>
                <div className="cfield">
                  <label htmlFor="name">NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Lala" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="cfield">
                  <label htmlFor="phone">PHONE NUMBER</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="0400 000 000" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="cfield">
                  <label htmlFor="email">EMAIL (OPTIONAL)</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="lala@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="cfield">
                  <label htmlFor="message">YOUR MESSAGE</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="What's on your mind?" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn-red">SUBMIT MESSAGE</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
