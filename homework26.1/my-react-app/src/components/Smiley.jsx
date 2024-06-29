import React, { useState } from 'react';
import  './Smiley.css';

const Smiley = ({ symbol }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <div onClick={incrementCount} style={{ fontSize: '2em', cursor: 'pointer' }}>
        {symbol}
      </div>
      <p>Кількість кліків: {count}</p>
    </div>
  );
};

export default Smiley;
