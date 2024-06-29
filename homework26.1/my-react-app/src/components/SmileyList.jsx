import React from 'react';
import Smiley from './Smiley'; 
import './SmileyList.css';

const SmileyList = () => {
  const smileys = ['😊', '😄', '😍', '😎'];

  return (
    <div>
      <h2>Список смайликів</h2>
      <div>
        {smileys.map((smiley, index) => (
          <Smiley key={index} symbol={smiley} />
        ))}
      </div>
    </div>
  );
};

export default SmileyList;
