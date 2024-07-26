import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../redux/thunk/thunks.js';  
import { clearTodo } from '../redux/actions/swapi.js';

import '../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const { loading, people, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const handleClearTodo = () => {
    dispatch(clearTodo());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars People</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {people.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </header>
      <footer className="App-footer">
        <button onClick={handleClearTodo}>Clear Data</button>
      </footer>
    </div>
  );
};

export default App;
