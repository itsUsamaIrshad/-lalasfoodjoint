import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import QuickMenu from './components/QuickMenu';
import Featured from './components/Featured';
import DealsBanner from './components/DealsBanner';
import About from './components/About';
import CtaStrip from './components/CtaStrip';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuInitialCategory, setMenuInitialCategory] = useState(null);

  const navigate = (page, catId = null) => {
    setCurrentPage(page);
    setMenuInitialCategory(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL hash for better UX (optional but professional)
    window.location.hash = page;
  };

  useEffect(() => {
    // Handle initial hash routing
    const hash = window.location.hash.replace('#', '');
    if (['home', 'menu', 'contact'].includes(hash)) {
      setCurrentPage(hash);
    }
  }, []);

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      
      {currentPage === 'home' && (
        <main>
          <Hero onNavigate={navigate} />
          <Ticker />
          <QuickMenu onNavigate={navigate} />
          <Featured onNavigate={navigate} />
          <DealsBanner onNavigate={navigate} />
          <About />
          <CtaStrip onNavigate={navigate} />
        </main>
      )}

      {currentPage === 'menu' && (
        <Menu initialCategory={menuInitialCategory} />
      )}

      {currentPage === 'contact' && (
        <Contact />
      )}

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
