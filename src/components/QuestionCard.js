import React, { useState, useEffect } from 'react';
import './QuestionCard.css';
function QuestionCard({ question, onAnswer, disableAnswer }) {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');

  // Reset state when the question changes
  useEffect(() => {
    setSelected(null);
    setFeedback('');
  }, [question]);

  const handleSelection = (option) => {
    if (disableAnswer || selected !== null) return;
    setSelected(option);
    const isCorrect = option.is_correct; // using API's field
    setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
    onAnswer(isCorrect);
  };

  return (
    <div className="question-card">
      <h2>{question.description}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`option-button ${
              selected && selected.id === option.id
                ? option.is_correct ? 'correct' : 'incorrect'
                : ''
            }`}
            onClick={() => handleSelection(option)}
            disabled={selected !== null}
          >
            {option.description}
          </button>
        ))}
      </div>
      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
}

export default QuestionCard;
