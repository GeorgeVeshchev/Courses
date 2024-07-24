import React from 'react';
import { createRoot } from 'react-dom'; 
import App from './App.jsx';

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
