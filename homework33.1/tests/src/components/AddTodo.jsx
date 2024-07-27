import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions.js';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddClick = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    } else {
      alert('Введіть текст задачі');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введіть задачу"
      />
      <button onClick={handleAddClick}>Додати</button>
    </div>
  );
};

export default AddTodo;
