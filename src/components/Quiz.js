// src/components/Quiz.js (only the header part is shown here)
import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import Timer from './Timer';
import './Quiz.css'; // Ensure this file is updated as below

const QUIZ_API = '/quiz-data.json'; // or your URL/proxy if needed

function Quiz({ onQuizEnd }) {
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);
  const [timerKey, setTimerKey] = useState(0);
  const [timeExpired, setTimeExpired] = useState(false);

  useEffect(() => {
    async function fetchQuizData() {
      try {
        const response = await fetch(QUIZ_API);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        if (data && data.questions) {
          setQuizData(data.questions);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load quiz data. Please try again later.');
      }
    }
    fetchQuizData();
  }, []);

  const handleTimeExpire = () => {
    setScore(prev => prev - 5);
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  const nextQuestion = () => {
    setTimeExpired(false);
    setTimerKey(prev => prev + 1);
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onQuizEnd(score);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 10);
    } else {
      setScore(prev => prev - 5);
    }
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  const exitQuiz = () => {
    onQuizEnd(score);
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (quizData.length === 0) {
    return <div>Loading quiz data...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="score-box">Score: {score}</div>
        <div className="question-box">Question: {currentIndex + 1} / {quizData.length}</div>
        <div className="exit-box">
          <button className="exit-button" onClick={exitQuiz}>Exit Quiz</button>
        </div>
      </div>
      <Timer key={timerKey} duration={15} onExpire={handleTimeExpire} />
      <QuestionCard
        question={quizData[currentIndex]}
        onAnswer={handleAnswer}
        disableAnswer={timeExpired}
      />
    </div>
  );
}

export default Quiz;

