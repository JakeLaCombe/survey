import React, { useState } from 'react';
import './SurveyQuestion.css';

const SurveyQuestion = ({ question, value, onChange = () => { } }) => {
    const [currentValue, setCurrentValue] = useState(value);

    return (
        <form className="survey-question">
            <h1 className="survey-question-title">{question.title}</h1>
            <div className="answers">
                {
                    question.answers.map((answer, index) => (<label key={answer} className="radio-container">{answer}
                        <input name="answer" type="radio" onChange={(e) => { onChange(e.currentTarget.value); setCurrentValue(e.currentTarget.value) }} checked={currentValue === index} value={index} />
                        <span className="radio-button" />
                    </label>))
                }
            </div>
        </form >
    );
}

export default SurveyQuestion;