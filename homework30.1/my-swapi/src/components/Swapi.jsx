import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../redux/actions/swapi.js';


const Swapi = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.swapi.people);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
    <div>
      <h2>People from Swapi</h2>
      {people.length === 0 ? (
        <p>No data available</p>
      ) : (
        <ul>
          {people.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Swapi;