import React from 'react';
import './Footer.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Footer() {
  const FlexHelper = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div className="main-footer">
      <div style={FlexHelper} className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col1">
            <h2>SUPPORT</h2>
            <p className="list-unstyled">
              <li>SELL YOUR CAR</li>
              <li>PAYMENT METHODS</li>
              <li>LOAN CALCULATOR</li>
              <li>OUR INSURANCE POLICIES</li>
              <li>RETURNS AND COMPLAINTS</li>
              <li>WHOLESALE</li>
              <li>PRIVACY POLICY</li>
              <li>COOKIE POLICY</li>
              <li>FAQ'S</li>
              <li>TERMS OF USE</li>
            </p>
          </div>
          {/* Column2 */}
          <div style={{ margin: '0 2rem' }} className="col2">
            <p className="deal">ONE DAY DEAL</p>
            <h2>
              SEE OUR OFFERS ON FINANCING YOUR <br /> ELECTRIC CAR
            </h2>
            <p className="read-more">
              Read more about the processing of your <br />
              personal data on the <b>PRIVACY POLICY</b> page.
            </p>
            <TextField placeholder="Email" /> <Button>Send</Button>
          </div>
          {/* Column3 */}
          <div className="col3">
            <h2>
              <img
                src="/static/turners-logo.png"
                width="300"
                height="auto"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </h2>
            <h2 id="social">
              <img src="/static/Social.svg" />
            </h2>
            <ui className="list-unstyled" id="about">
              <li>ABOUT US</li>
              <li>POLICY</li>
              <li>GENERAL CONDITIONS</li>
              <li>TURNERS CLUB</li>
              <li>CONTACT</li>
              <li>IMPRINT</li>
              <li>COMPLAINTS AND OBJECTIONS</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} All rights reserved. 100% KIWI
            OWNED
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
