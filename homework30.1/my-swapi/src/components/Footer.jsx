import React from 'react';
import { connect } from 'react-redux';
import { clearTodo } from '../redux/actions/swapi.js';

const Footer = ({ clearTodo }) => {
  return (
    <footer>
      <button onClick={clearTodo}>Clear TODO</button>
    </footer>
  );
};

export default connect(null, { clearTodo })(Footer);