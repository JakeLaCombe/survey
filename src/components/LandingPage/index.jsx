import React from 'react';
import './LandingPage.css';
import Button from '../Button';

const LandingPage = ({ onStart }) => {
    return (
        <div className="landing-page">
            <div style={{ margin: '4rem' }}></div>
            <h1 className="landing-page-title">Welcome!</h1>
            <div style={{ margin: '4rem' }}></div>
            <Button onClick={onStart}>Click here to get started!</Button>
        </div>
    );
}

export default LandingPage;