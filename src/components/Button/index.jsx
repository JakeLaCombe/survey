import React from 'react';
import './Button.css';

const Button = ({ onClick = () => { }, children, fullWidth = false }) => {
    return (
        <button onClick={onClick} className={`primary-button ${fullWidth && 'full-width'}`}><span className="primary-button-btn__content">{children}</span></button>
    );
}

export default Button;