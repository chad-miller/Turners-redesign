
import React from "react";
import "./ContactForm.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ContactForm() {
  return (
    <div className='ContactForm'>
        <div className='missing'>
            Missed Something?
        </div>
        <div className='help'>
        Want help instantly? Try our virtual chatbot or call us on 0800 887 637
        </div>
        <div className='form'>
            <h2>Contact Form</h2>
            <div id='form'>
                <TextField style={{backgroundColor: "white"}} variant="filled" placeholder='FIRST & LAST NAME'/>
            </div>
            <div id='form'>
                <TextField style={{backgroundColor: "white"}} variant="filled" placeholder='PHONE NUMBER'/>
            </div>
            <div id='form'>
                <TextField style={{backgroundColor: "white"}} variant="filled" placeholder='EMAIL ADDRESS'/>
            </div>
            <div id='form'>
                <TextField style={{backgroundColor: "white"}} variant="filled" placeholder='MESSAGE'/>
            </div>
        </div>
        <div>
            <Button variant="contained" color="primary">Submit</Button>
        </div>
    </div>
  );
}

export default ContactForm;