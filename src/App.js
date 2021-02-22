import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/";
import ProgressBar from "./components/ProgressBar";
import Container from "./components/Container";
import Survey from "./components/Survey";
import LandingPage from "./components/LandingPage";
import Review from "./components/Review";
import Results from "./components/Results";

const States = {
  LANDING_PAGE: 0,
  SURVEY: 1,
  REVIEW: 2,
  RESULTS: 3,
};

function App() {
  const [currentPage, setCurrentPage] = useState(States.LANDING_PAGE);
  const [answers, setAnswers] = useState({});

  return (
    <div className="App">
      <Layout />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "3em",
          paddingBottom: "3em",
        }}
      >
        <Container classes="progress-container">
          <ProgressBar checkpoint={currentPage} />
          <div style={{ marginTop: "2em" }} />
          {currentPage === States.LANDING_PAGE && (
            <LandingPage
              onStart={() => {
                setCurrentPage(States.SURVEY);
              }}
            />
          )}
          {currentPage === States.SURVEY && (
            <Survey
              onSurveyFinished={(surveyAnswers) => {
                setAnswers(surveyAnswers);
                setCurrentPage(States.REVIEW);
              }}
            />
          )}
          {currentPage === States.REVIEW && (
            <Review
              answers={answers}
              onConfirm={() => setCurrentPage(States.RESULTS)}
            />
          )}
          {currentPage === States.RESULTS && <Results answers={answers} />}
        </Container>
        <Container classes="disclaimer">
          <p>
            <strong>CONTENT DISCLAIMER:</strong>
          </p>
          <p>
            Recommendations relating to this questionnaire will be based on the assumption
            that the answers to this questionnaire are complete, accurate, and reflect your
            current situation.  Please notify your representative promptly if your financial
            situation or any of the information contained in your questionnaire changes.
            This form collects data for informational purposes only and does not
            supersede any data or information reported on official Cambridge forms.
          </p>
          <p>
            Securities offered through Registered Representatives of Cambridge Investment
            Research, Inc. a broker/dealer, Member FINRA/SIPC; to residents of MO, IL,
            Washington D.C.. Advisory services offered through Cambridge Investment
            Research Advisors, Inc., a Registered Investment Advisor. Cambridge
            and Bobber Wealth Management are separate entities.
          </p>
          <p>
            Check the background of your financial professional on FINRA’s
            BrokerCheck{" "}
            <a href="https://brokercheck.finra.org/">
              https://brokercheck.finra.org/
            </a>
          </p>
        </Container>
      </div>
    </div>
  );
}

export default App;
