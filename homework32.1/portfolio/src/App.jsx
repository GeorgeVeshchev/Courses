import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Home from '../src/pages/Home.jsx';
import TodoPage from '../src/pages/TodoPage.jsx';
import SwapiPage from '../src/pages/SwapiPage.jsx'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/swapi" element={<SwapiPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
