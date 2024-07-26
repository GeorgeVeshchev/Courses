import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, editTodo, clearCompleted, loadTodos } from '../actions/index.js';
import '../styles/Todo.css'

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addTodo('New TODO'));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (id, text) => {
    dispatch(editTodo(id, text));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <button onClick={handleAdd}>Add TODO</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleEdit(todo.id, prompt('Edit TODO:', todo.text))}>Edit</button>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
