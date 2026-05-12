import React from 'react';

const Ticker = () => {
  const tickerItems = [
    "LALA'S FOOD JOINT",
    "OPEN 5 PM – 4 AM",
    "7 DAYS A WEEK",
    "BURGERS · WRAPS · SIDES · DEALS",
    "FAWKNER VIC",
    "CALL: 0413 498 115"
  ];

  return (
    <div className="ticker">
      <div className="ticker__inner" id="ticker-inner">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {tickerItems.map((item, j) => (
              <span className="ticker__item" key={j}>
                {item}<span className="ticker__sep">✦</span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
