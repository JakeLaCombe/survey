import React from 'react';
import './QuestionNumber.css'

const QuestionNumber = () => {
    return (
        <div className="question-number-container">
            <span className="question-number-decoration"></span>
            <span className="question-number">1 of 13</span>
            <span className="question-number-decoration"></span>
        </div>
    );
}

export default QuestionNumber;