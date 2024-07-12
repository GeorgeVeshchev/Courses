import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    setTheme(newTheme);
  };

  return (
    <header>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/about">Про мене</Link>
        <button onClick={toggleTheme}>Змінити тему</button>
      </nav>
    </header>
  );
}

export default Header;
