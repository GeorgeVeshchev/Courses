import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from '../redux/reducers/todoReducer.js';
import App from '../App.jsx';

const store = createStore(todoReducer);

test('перевіряє заголовок і наявність компонентів', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const titleElement = screen.getByText(/TODO/i);
  expect(titleElement).toBeInTheDocument();

  const addTodoInput = screen.getByPlaceholderText(/введіть задачу/i);
  expect(addTodoInput).toBeInTheDocument();

  const todoList = screen.getByRole('list');
  expect(todoList).toBeInTheDocument();
});
