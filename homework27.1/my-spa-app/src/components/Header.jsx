import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'


function Header({ toggleTheme, theme }) {
  return (
    <header>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/about">Про мене</Link>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Змінити на темну' : 'Змінити на світлу'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
