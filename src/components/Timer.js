import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer({ duration, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  // Use a ref to ensure onExpire is only called once
  const expiredRef = useRef(false);

  useEffect(() => {
    // If time has run out and we haven't already expired, call onExpire once.
    if (timeLeft <= 0 && !expiredRef.current) {
      expiredRef.current = true;
      onExpire();
      return;
    }
    // If already expired, do nothing further.
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onExpire]);

  return (
    <div className="timer">Time Left: {timeLeft} seconds</div>
  );
}

export default Timer;
