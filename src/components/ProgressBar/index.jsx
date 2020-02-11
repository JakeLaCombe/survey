import React from 'react';
import './ProgressBar.css'

const calculateProgress = (checkpointNumber) => {
    switch (checkpointNumber) {
        case 0:
            return 0;
        case 1:
            return 33;
        case 2:
            return 67;
        case 3:
            return 100;
        default:
            return 0;
    }

}

const ProgressBar = ({ checkpoint }) => {
    const progress = calculateProgress(checkpoint);

    return (
        <div className="progress-bar-container">
            <progress className="Progress" value={progress} max="100" />
            <span className={`progress-bar-checkpoint checkpoint-1 active`}></span>
            <span className={`progress-bar-checkpoint checkpoint-2 ${progress >= 33 ? 'active' : ''}`}></span>
            <span className={`progress-bar-checkpoint checkpoint-3 ${progress >= 67 ? 'active' : ''}`}></span>
            <span className={`progress-bar-checkpoint checkpoint-4 ${progress >= 100 ? 'active' : ''}`}></span>
        </div>
    );
}

export default ProgressBar;