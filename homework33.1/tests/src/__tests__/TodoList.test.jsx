import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from '../redux/reducers/todoReducer.js';
import TodoList from '../components/TodoList.jsx    ';

const store = createStore(todoReducer);

test('перевіряє, що новий елемент з’являється у списку', () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  store.dispatch({ type: 'ADD_TODO', payload: 'Нове завдання' });

  const todoItem = screen.getByText(/Нове завдання/i);
  expect(todoItem).toBeInTheDocument();
});
