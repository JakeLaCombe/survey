import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout/';
import ProgressBar from './components/ProgressBar';
import Container from './components/Container';
import Survey from './components/Survey';
import LandingPage from './components/LandingPage';
import Review from './components/Review';
import Results from './components/Results';

const States = {
  LANDING_PAGE: 0,
  SURVEY: 1,
  REVIEW: 2,
  RESULTS: 3,
}

function App() {
  const [currentPage, setCurrentPage] = useState(States.RESULTS)
  const [answers, setAnswers] = useState({})

  return (
    <div className="App">
      <Layout />
      <div style={{ marginTop: '3em', paddingBottom: '3em' }}>
        <Container>
          <ProgressBar checkpoint={currentPage} />
          <div style={{ marginTop: '2em' }} />
          {currentPage === States.LANDING_PAGE && <LandingPage onStart={() => { setCurrentPage(States.SURVEY); }} />}
          {currentPage === States.SURVEY && <Survey onSurveyFinished={(surveyAnswers) => { setAnswers(surveyAnswers); setCurrentPage(States.REVIEW) }} />}
          {currentPage === States.REVIEW && <Review answers={answers} onConfirm={() => setCurrentPage(States.RESULTS)} />}
          {currentPage === States.RESULTS && <Results answers={answers} />}
        </Container>
      </div >
    </div >
  );
}

export default App;
