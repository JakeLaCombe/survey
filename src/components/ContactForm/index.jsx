import React from 'react';
import './ContactForm.css';
import Button from '../Button';

const ContactForm = ({ onStart }) => {
    return (
        <>
            <h1 className="contact-form-title">Contact an Advisor</h1>
            <p className="contact-form-description">Thank you for your interest in us! Please fill out The form below, and advise will be with you as soon as possible!</p>
            <form className="contact-form">
                <input className="input" name="first" type="text" placeholder="First" />
                <input className="input" name="last" type="text" placeholder="Last" />
                <input className="input" name="age" type="number" placeholder="Age" />
                <input className="input" name="email" type="email" placeholder="Email" />
                <input className="input" name="number" type="tel" placeholder="Phone Number" />
                <Button fullWidth>Submit</Button>
            </form>
        </>
    );
}

export default ContactForm;