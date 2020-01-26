import React, { useState, useEffect, useRef } from 'react';
import './Survey.css';
import QuestionNumber from '../QuestionNumber';
import SurveyQuestion from '../SurveyQuestion';
import { CSSTransition } from 'react-transition-group';

const questions =
    [
        {
            id: '1',
            title: 'What is your current employeement status?',
            answers: [
                'I am a current full time federal employee',
                'I am currently on active duty in the military',
                'I am a part tiem federal employee or national guard/reserve military member',
                ' I am a retired military or federal employee'
            ]
        },
        {
            id: '2',
            title: 'How old are you',
            answers: [
                '17-30',
                '30-45',
                '45-55',
                '56+'
            ]
        },
        {
            id: '3',
            title: 'How many years until you expect to retire?',
            answers: [
                '20 years or more',
                '10-20 years',
                '5 - 10 years',
                'Less than 5 years or currently retired'
            ]
        },
        {
            id: '4',
            title: 'How much do you currently have in your savings?',
            answers: [
                '6 months or more of living expenses',
                '3-5 months living expenses',
                '1-2 months living expenses',
                'Less than one month of living expenses'
            ]
        },
        {
            id: '5',
            title: 'If the stock marker lost 40% you would',
            answers: [
                'See it as an opportunty and invest more if you had the cash available',
                'Continue with my currenty strategy but not invest any more even if I had cash available',
                'Change my strategy and reduce my exposure to risk',
                'I would pull my money out of the stock market',
            ]
        },
        {
            id: '6',
            title: 'If the stock marker lost 40% you would',
            answers: [
                'See it as an opportunty and invest more if you had the cash available',
                'Continue with my currenty strategy but not invest any more even if I had cash available',
                'Change my strategy and reduce my exposure to risk',
                'I would pull my money out of the stock market',
            ]
        },
        {
            id: '7',
            title: 'If the stock marker lost 40% you would',
            answers: [
                'See it as an opportunty and invest more if you had the cash available',
                'Continue with my currenty strategy but not invest any more even if I had cash available',
                'Change my strategy and reduce my exposure to risk',
                'I would pull my money out of the stock market',
            ]
        },
        {
            id: '7',
            title: 'In the next few years you expect your income to',
            answers: [
                'Increase',
                'Stay the same',
                'Decrease',
                'Decrease Drastically'
            ]
        },
        {
            id: '8',
            title: 'What do you expect out of your TSP?',
            answers: [
                'I expect my portfolio to significantly exceed inflation, even if this means higher levels of Volitility',
                'I expect my portfolid to exceed inflation, with reaonable levels of volitility',
                'I exepct my portfolid to keep pace with inflation, with lover levels of volility',
                'I am more concerned with having as little volitility as possible more than keeping pace with inflation'
            ]
        },
        {
            id: '9',
            title: "I'm most comfortable with a portfolio that",
            answers: [
                'May fluctuate by 20% up or down but averages 10% over the life of the investment',
                'May fluctuate by 15% up or down but averages 8% over the life of the investment',
                'May fluctuate by 10% up or down but averages 4-6% over the life of the investment',
                'I would take less than 2% in exchange for my portfolio fluctuation a minimal amount',
            ]
        },
        {
            id: '10',
            title: 'How would you describe yourself?',
            answers: [
                'I am an optimist. I am confident that things will always work out.',
                "I am objective. Show me the benefits and the drawbacks. I'll make a decision and live with it",
                'I am an anxious person. I usually worry about most things',
                'I am a pessimist. If somethign can go wrong, it will go wrong.'
            ]
        },
        {
            id: '11',
            title: 'When you are reviewing your TSP to what do you tink ou will focus your attention?',
            answers: [
                'The overall longterm performance of the entire portfolio',
                'The most recent results of the entire portfolio',
                'The infidivual fund that is doing the best',
                'The individual fund that is doing the worst',
            ]
        },
        {
            id: '12',
            title: 'If I was given $10,000 in an inheritance I would',
            answers: [
                'Wait for a drop in the market and invest the money according to my current investment strategy',
                'Invest the money immediately in accordance with my current investment strategy',
                'Invest the money in Low RiskBonds or Certificates of Deposit',
                'Save the money and not invest any of it.'
            ]
        },
    ]

function Survey() {
    const answers = {};
    let [currentQuestion, setCurrentQuestion] = useState(0)
    let [showQuestion, setShowQuestion] = useState(false)
    let [showActions, setShowActions] = useState(true)
    let showFirstQuestion = useRef(true);

    useEffect(() => {
        if (showFirstQuestion.current) {
            setTimeout(setShowQuestion(true), 0);
            showFirstQuestion.current = false;
        }
    })

    return (
        <>
            <QuestionNumber />
            <div style={{ position: 'relative' }}>
                <CSSTransition
                    in={showQuestion}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEntered={() => { setShowActions(true) }}
                >
                    <SurveyQuestion
                        key={questions[currentQuestion].id}
                        question={questions[currentQuestion]} />
                </CSSTransition>
            </div>
            {showActions &&
                <div className="question-actions">
                    {currentQuestion !== 0 - 1 && <button onClick={() => {
                        setCurrentQuestion(currentQuestion -= 1)
                        setShowActions(false)
                        setShowQuestion(false)
                        setTimeout(() => { setShowQuestion(true) }, 0)
                    }}> <span class="btn__content" tabindex="-1">{'<<< Previous'}</span></button>}
                    {currentQuestion !== questions.length - 1 && <button onClick={() => {
                        setCurrentQuestion(currentQuestion += 1)
                        setShowActions(false)
                        setShowQuestion(false)
                        setTimeout(() => { setShowQuestion(true) }, 0)
                    }}><span class="btn__content" tabindex="-1">{'Next >>>'}</span></button>}
                </div>
            }
        </>
    );
}

export default Survey;
