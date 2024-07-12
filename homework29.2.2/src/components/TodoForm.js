import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import './TodoForm.css'; 

const TodoForm = ({ dispatch }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className = 'todo-input'
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <button className = 'todo-button' type="submit">Add Todo</button>
    </form>
  );
};

export default connect()(TodoForm);
