import React from 'react';
import './TodoList.css'; 

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button className="delete_button" onClick={() => onDelete(todo.id)}>Видалити</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;