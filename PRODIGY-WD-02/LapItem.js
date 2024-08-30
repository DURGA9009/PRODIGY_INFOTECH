
import React from 'react';

const LapItem = ({ index, lapTime }) => {
  return (
    <li>
      Lap {index}: {lapTime}
    </li>
  );
};
export default LapItem;