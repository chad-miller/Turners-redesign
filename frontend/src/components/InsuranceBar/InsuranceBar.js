import React from 'react';

const InsuranceBar = () => {
  const InsuranceBarStyling = {
    fontFamily: 'Oswald, sans-serif',
    background: '#B71134',
    color: 'white',
    textAlign: 'center',
    padding: '0.5rem',
    margin: '0 0 60px 0',
  };

  return (
    <div style={InsuranceBarStyling}>
      BUY INSURANCE PLUS TODAY AND RECEIVE A 10% DISCOUNT
    </div>
  );
};

export default InsuranceBar;
