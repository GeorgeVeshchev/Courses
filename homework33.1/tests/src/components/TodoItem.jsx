import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions/todoActions.js';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? 'Позначити як не виконану' : 'Позначити як виконану'}
      </button>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Видалити</button>
    </div>
  );
};

export default TodoItem;
