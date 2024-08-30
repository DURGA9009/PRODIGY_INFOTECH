import React from 'react';
import LapItem from './LapItem';
import './LapTimes.css';

const LapTimes = ({ laps }) => {
  return (
    <div className="lap-times">
      <h2>Lap Times</h2>
      <ul>
        {laps.map((lap, index) => (
          <LapItem key={index} index={index + 1} lapTime={lap} />
        ))}
      </ul>
    </div>
  );
};

export default LapTimes;