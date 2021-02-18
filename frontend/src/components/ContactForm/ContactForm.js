import React from 'react';
import './ContactForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ContactForm() {
  const Relative = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  };

  const Absolute = {
    position: 'absolute',
    justifyContent: 'end',
    marginLeft: '465px',
    marginTop: '85px',
  };

  return (
    <div style={Relative} className="ContactForm">
      <div className="missing">MISSED SOMETHING?</div>
      <div className="help">
        Want help instantly? Try our virtual chatbot or call us on 0800 887 637
      </div>
      <div className="form">
        <h2>Contact Form</h2>
        <div id="form">
          <TextField
            style={{ backgroundColor: 'white', width: '50%' }}
            variant="filled"
            placeholder="FIRST & LAST NAME"
          />
        </div>
        <div id="form">
          <TextField
            style={{ backgroundColor: 'white', width: '50%' }}
            variant="filled"
            placeholder="PHONE NUMBER"
          />
        </div>
        <div id="form">
          <TextField
            style={{ backgroundColor: 'white', width: '50%' }}
            variant="filled"
            placeholder="EMAIL ADDRESS"
          />
        </div>
        <div id="form">
          <TextField
            style={{ backgroundColor: 'white', width: '50%' }}
            variant="filled"
            placeholder="MESSAGE"
          />
        </div>
      </div>
      <div>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
      <img
        style={Absolute}
        src="/static/missed-something.png"
        width="auto"
        height="75%"
        className="d-inline-block align-top"
        alt="missed-something"
      />
    </div>
  );
}

export default ContactForm;
