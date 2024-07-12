import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.count);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
