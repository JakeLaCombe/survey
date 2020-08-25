import React, { useState, useEffect, useRef } from "react";
import "./Survey.css";
import QuestionNumber from "../QuestionNumber";
import SurveyQuestion from "../SurveyQuestion";
import { CSSTransition } from "react-transition-group";
import questions from "../questions";

function Survey({ onSurveyFinished }) {
  let [answers, setAnswers] = useState({});
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [showQuestion, setShowQuestion] = useState(false);
  let [showActions, setShowActions] = useState(true);
  let showFirstQuestion = useRef(true);

  useEffect(() => {
    if (showFirstQuestion.current) {
      setTimeout(setShowQuestion(true), 0);
      showFirstQuestion.current = false;
    }
  }, [showFirstQuestion]);

  return (
    <>
      <QuestionNumber questionNumber={currentQuestion + 1} />
      <div style={{ position: "relative", flexBasis: "35em" }}>
        <CSSTransition
          in={showQuestion}
          timeout={300}
          classNames="alert"
          onEntered={() => {
            setShowActions(true);
          }}
        >
          {showQuestion ? (
            <SurveyQuestion
              key={questions[currentQuestion].id}
              value={answers[currentQuestion]}
              question={questions[currentQuestion]}
              onChange={(value) => {
                setAnswers({ ...answers, [currentQuestion]: value });
              }}
            />
          ) : (
            <div></div>
          )}
        </CSSTransition>
      </div>
      {showActions && (
        <div className="question-actions">
          {currentQuestion !== 0 && (
            <button
              className="prev-button"
              key="prev"
              onClick={() => {
                setCurrentQuestion((currentQuestion -= 1));
                setShowActions(false);
                setShowQuestion(false);
                setTimeout(() => {
                  setShowQuestion(true);
                }, 100);
              }}
            >
              {" "}
              <span className="btn__content" tabIndex="-1">
                {"<<<"}&nbsp;&nbsp;&nbsp;&nbsp;Previous
              </span>
            </button>
          )}
          {currentQuestion !== questions.length - 1 && (
            <button
              className="next-button"
              key="next"
              disabled={answers[currentQuestion.toString()] === undefined}
              onClick={() => {
                setCurrentQuestion((currentQuestion += 1));
                setShowActions(false);
                setShowQuestion(false);
                setTimeout(() => {
                  setShowQuestion(true);
                }, 100);
              }}
            >
              <span className="btn__content" tabIndex="-1">
                Next&nbsp;&nbsp;&nbsp;&nbsp;{">>>"}
              </span>
            </button>
          )}
          {currentQuestion === questions.length - 1 && (
            <button
              className="next-button"
              key="next"
              disabled={answers[currentQuestion.toString()] === undefined}
              onClick={() => {
                onSurveyFinished(answers);
              }}
            >
              <span className="btn__content" tabIndex="-1">
                Finish
              </span>
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Survey;
