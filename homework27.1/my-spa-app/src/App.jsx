import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ErrorBoundary from '../src/components/ErrorBoundary';
import HomePage from '../src/components/HomePage';
import ContactsPage from '../src/components/ContactsPage';
import AboutPage from '../src/components/AboutPage';
import './styles/Header.css';
import './styles/ErrorBoundary.css';
import './styles/TodoForm.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      <div id="app" className={theme === 'dark' ? 'dark-theme' : ''}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorBoundary />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
