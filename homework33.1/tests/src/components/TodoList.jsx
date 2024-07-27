import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem.jsx';
import Filter from '../components/Filter.jsx';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-list">
      <Filter />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
