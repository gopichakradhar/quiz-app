import React from 'react';
import './ScoreBoard.css';
function ScoreBoard({ score, current, total }) {
  return (
    <div className="scoreboard">
      <div>Score: {score}</div>
      <div>
        Question: {current} / {total}
      </div>
    </div>
  );
}

export default ScoreBoard;
