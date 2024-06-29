import React from 'react';
import './App.css'; 
import SmileyList from './components/SmileyList.jsx'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Лічильник</h1>
      </header>
      <main className="App-main">
        <SmileyList />
      </main>
    </div>
  );
}

export default App;
