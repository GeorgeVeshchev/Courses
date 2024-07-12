import React, { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import './App.css';
import '.';
import '.'; 

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoItem) => {
    setTodos([...todos, { id: todos.length + 1, text: todoItem }]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="todo-form">
        <TodoForm onSubmit={addTodo} />
      </div>
      <hr />
      <h2>Список Todo:</h2>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
