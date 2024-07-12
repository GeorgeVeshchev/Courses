import React, { useState } from 'react';

function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    const newTodo = {
      id: todos.length + 1,
      text: inputValue.trim()
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Нове завдання"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Додати</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoForm;
