import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Summary from './components/Summary';
import './App.css';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
    setFinalScore(0);
  };

  const endQuiz = (score) => {
    setFinalScore(score);
    setQuizFinished(true);
    setQuizStarted(false);
  };

  return (
    <div className="App">
      {!quizStarted && !quizFinished && (
        <div className="start-screen">
          <h1>Welcome to the Quiz!</h1>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      )}
      {quizStarted && !quizFinished && <Quiz onQuizEnd={endQuiz} />}
      {quizFinished && <Summary score={finalScore} onRestart={startQuiz} />}
    </div>
  );
}

export default App;
