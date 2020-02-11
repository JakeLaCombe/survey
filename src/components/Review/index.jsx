import React, { useState } from 'react';
import questions from '../questions';
import SurveyQuestion from '../SurveyQuestion';
import Button from '../Button';
import './Review.css';

const Review = ({ answers, onConfirm = () => { } }) => {
    const [surveyAnswers, setSurveyAnswers] = useState(answers);

    return (
        <>
            <div style={{ marginBottom: '3em' }}></div>
            {questions.map((question) => (
                <div style={{ borderBottom: '#ddd solid 1px', marginBottom: '1em', paddingBottom: '1em' }}>
                    <SurveyQuestion
                        question={question}
                        value={surveyAnswers[question.id]}
                        onChange={(value) => {
                            setSurveyAnswers({ ...surveyAnswers, [question.id]: value })
                        }}
                    />
                </div>

            ))}
            <div style={{ padding: '1rem 2rem 3rem' }}>
                <Button fullWidth onClick={onConfirm} >Submit</Button>
            </div>
        </>
    );
}

export default Review;