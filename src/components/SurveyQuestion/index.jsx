import React from 'react';
import './SurveyQuestion.css';

const SurveyQuestion = ({ question }) => {
    return (
        <form className="survey-question">
            <h1 className="survey-question-title">{question.title}</h1>
            <div className="answers">
                {
                    question.answers.map((answer) => (<label className="radio-container">{answer}
                        <input name="answer" type="radio" />
                        <span className="radio-button" />
                    </label>))
                }
            </div>
        </form >
    );
}

export default SurveyQuestion;