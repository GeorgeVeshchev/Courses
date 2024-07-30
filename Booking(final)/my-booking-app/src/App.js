import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main.jsx';
import About from './pages/About.jsx';
import Hotels from './pages/Hotels.jsx';
import Search from './pages/Search.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default App;