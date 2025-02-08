import React from 'react';
import './Summary.css';
function Summary({ score, onRestart }) {
  let message = '';
  if (score < 20) {
    message = 'Better luck next time!';
  } else if (score < 50) {
    message = 'Good job!';
  } else {
    message = 'Excellent performance!';
  }

  return (
    <div className="summary">
      <h2>Quiz Completed</h2>
      <p>Your Total Score: {score}</p>
      <p>{message}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default Summary;
