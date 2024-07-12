import React from 'react';
import { connect } from 'react-redux';
import './Footer.css'; 

const Footer = ({ totalTodos }) => {
  return <div className='footer-container'>Total Todos: {totalTodos}</div>;
};

const mapStateToProps = (state) => ({
  totalTodos: state.todos.length,
});

export default connect(mapStateToProps)(Footer);
