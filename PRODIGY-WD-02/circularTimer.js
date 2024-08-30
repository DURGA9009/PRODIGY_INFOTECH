import React from 'react';
import './circularTimer.css';

const CircularTimer = ({ time, isRunning }) => {
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  };

  return (
    <div className="circular-timer">
      <div className={`circle ${isRunning ? 'rotating' : ''}`}>
        <div className="half-circle"></div>
        <div className="time-display">{formatTime(time)}</div>
      </div>
    </div>
  );
};

export default CircularTimer;