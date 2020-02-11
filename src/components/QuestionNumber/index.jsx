import React from 'react';
import './QuestionNumber.css'

const QuestionNumber = ({ questionNumber }) => {
    return (
        <div className="question-number-container">
            <span className="question-number-decoration"></span>
            <span className="question-number">{`${questionNumber} of 11`}</span>
            <span className="question-number-decoration"></span>
        </div>
    );
}

export default QuestionNumber;