import React from 'react';

const QuickMenu = ({ onNavigate }) => {
  const quickItems = [
    { label: 'Specials', icon: '⭐', cat: 'special' },
    { label: 'Grilled', icon: '🔥', cat: 'grilled' },
    { label: 'Crumbled', icon: '🍗', cat: 'crumbled' },
    { label: 'Beef Burgers', icon: '🥩', cat: 'beef' },
    { label: 'Chicken Wraps', icon: '🌯', cat: 'chickenwraps' },
    { label: 'Beef Wraps', icon: '🌯', cat: 'beefwraps' },
    { label: 'Sides', icon: '🍟', cat: 'sides' },
    { label: 'Deals', icon: '🎉', cat: 'deals' },
  ];

  return (
    <div className="quick">
      <div className="quick__inner">
        {quickItems.map((item, index) => (
          <div 
            key={index} 
            className="quick-btn" 
            onClick={() => onNavigate('menu', item.cat)}
          >
            <span className="quick-btn__icon">{item.icon}</span>
            <span className="quick-btn__label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickMenu;
