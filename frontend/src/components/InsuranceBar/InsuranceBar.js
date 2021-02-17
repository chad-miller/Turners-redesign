import React from 'react';

const InsuranceBar = () => {
  const InsuranceBarStyling = {
    fontFamily: 'Oswald, sans-serif',
    background: '#B71134',
    color: 'white',
    textAlign: 'center',
    padding: '0.5rem',
  };

  const MarginRight = {
    marginRight: '0.5rem',
  };

  return (
    <div style={InsuranceBarStyling}>
      <img
        style={MarginRight}
        src="/static/insurance-bar-icon.png"
        width="auto"
        height="20"
        className="d-inline-block align-top"
        alt="insurance-icon"
      />
      BUY INSURANCE PLUS TODAY AND RECEIVE A 10% DISCOUNT
    </div>
  );
};

export default InsuranceBar;
