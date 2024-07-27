import React from 'react';
import AddTodo from '../src/components/AddTodo.jsx';
import TodoList from '../src/components/TodoList.jsx';

const App = () => {
  return (
    <div className="app">
      <h1>TODO</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
