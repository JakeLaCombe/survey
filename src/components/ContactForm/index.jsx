import React from 'react';
import './ContactForm.css';
import Button from '../Button';
import { useState } from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const ContactForm = ({ onStart }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [sendingEmail, setSendingEmail] = useState(false);

    /* joel@bobberwm.com */
    const sendEmail = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        setSendingEmail(true);

        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                "email": email,
                "name": "Thank you for referring to us",
                "details": "We will respond to you very soon",
            })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        const responseBody = await response;
        setSendingEmail(false);

        if (responseBody && responseBody.status == "200") {
            setEmailSent(true);
        }
    }

    return (
        <div>
            {sendingEmail && <p>Sending Email</p>}
            {!sendingEmail && !emailSent && (<>
                <h1 className="contact-form-title">Contact an Advisor</h1>
                <p className="contact-form-description">Thank you for your interest in us! Please fill out The form below, and advise will be with you as soon as possible!</p>
                <form action="/" method="post" className="contact-form" onSubmit={sendEmail}>
                    <input className="input" name="first" type="text" placeholder="First" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                    <input className="input" name="last" type="text" placeholder="Last" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                    <input className="input" name="age" type="number" placeholder="Age" value={age} onChange={(e) => { setAge(e.target.value) }} />
                    <input className="input" name="email" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input className="input" name="number" type="tel" placeholder="Phone Number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
                    <Button fullWidth>Submit</Button>
                </form>
            </>)}
            {!sendingEmail && emailSent && <p>Thank you for your response! We will repond as soon as possible!</p>}
        </div>
    );
}

export default ContactForm;