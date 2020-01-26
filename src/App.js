import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Layout from './components/Layout/';
import ProgressBar from './components/ProgressBar';
import Container from './components/Container';
import QuestionNumber from './components/QuestionNumber';
import Survey from './components/Survey';


function App() {
  return (
    <div className="App">
      <Layout />
      <div style={{ marginTop: '3em' }}>
        <Container>
          <ProgressBar />
          <div style={{ marginTop: '2em' }} />
          <Survey />
        </Container>
      </div >
    </div >
  );
}

export default App;
