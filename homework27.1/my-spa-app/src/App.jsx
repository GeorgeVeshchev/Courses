import React from 'react';
import { router } from '../router/routerConfig';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Header />
        {router}
      </div>
    </BrowserRouter>
  );
}

export default App;
