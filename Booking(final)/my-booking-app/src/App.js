import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Hotels from './pages/Hotels';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/hotels" element={<Hotels />} />
    </Routes>
  );
}

export default App;
