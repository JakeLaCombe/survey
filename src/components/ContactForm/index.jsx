import React from 'react';
import './ContactForm.css';
import Button from '../Button';
import { useState } from 'react';
import { InvestmentTitle } from '../Results';
import ReactLoading from 'react-loading';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const ContactForm = ({ onStart, score }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState(false);
    const [sendingEmail, setSendingEmail] = useState(false);

    const sendEmail = (e) => {
        e.stopPropagation();
        e.preventDefault();

        setSendingEmail(true);
        setError(false);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "first": firstName,
                "last": lastName,
                "age": age,
                "email": email,
                "number": number,
                "details": firstName + " " + lastName + " has a score of " + score + " giving an investment strategy of " + InvestmentTitle(score),
            })
        })
            .then(() => setEmailSent(true))
            .catch(error => setError(true))
            .finally(() => setSendingEmail(false));

    }

    return (
        <div>
            {sendingEmail && <div className="loading-container"><ReactLoading className="loading-icon" type="spin" color="#000000" height={'20%'} width={'20%'} /><p>Sending Email</p></div>}
            {error && <p className="alert-error">An error occured. Please try again.</p>}
            {!sendingEmail && !emailSent && (<>
                <h1 className="contact-form-title">Contact an Advisor</h1>
                <p className="contact-form-description">Thank you for your interest in us! Please fill out The form below, and advise will be with you as soon as possible!</p>
                <form action="/" method="post" className="contact-form" onSubmit={sendEmail}>
                    <input className="input" name="first" type="text" placeholder="First" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                    <input className="input" name="last" type="text" placeholder="Last" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                    <input className="input" name="age" type="number" placeholder="Age" value={age} onChange={(e) => { setAge(e.target.value) }} />
                    <input className="input" name="email" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input className="input" name="number" type="tel" placeholder="Phone Number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
                    <input name="details" type="hidden" placeholder="Details" />
                    <Button fullWidth>Submit</Button>
                </form>
            </>)}
            {!sendingEmail && emailSent && <p className="alert-positive">Thank you for your response! We will respond as soon as possible!</p>}
        </div>
    );
}

export default ContactForm;