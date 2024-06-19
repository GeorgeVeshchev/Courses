import './App.css';
import React from 'react';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Star Wars API Interface</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Characters</h5>
              <p className="card-text">List of Star Wars characters.</p>
              <a href="#" className="btn btn-primary">View Characters</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Planets</h5>
              <p className="card-text">List of Star Wars planets.</p>
              <a href="#" className="btn btn-primary">View Planets</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;