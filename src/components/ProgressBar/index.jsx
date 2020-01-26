import React from 'react';
import './ProgressBar.css'

const ProgressBar = () => {
    return (
        <div className="progress-bar-container">
            <progress className="Progress" value="33" max="100" />
            <span className="progress-bar-checkpoint checkpoint-1 active"></span>
            <span className="progress-bar-checkpoint checkpoint-2 active"></span>
            <span className="progress-bar-checkpoint checkpoint-3"></span>
            <span className="progress-bar-checkpoint checkpoint-4"></span>

        </div>
    );
}

export default ProgressBar;