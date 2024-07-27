import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from '../redux/reducers/todoReducer.js';
import AddTodo from '../components/AddTodo.jsx';

const store = createStore(todoReducer);

test('перевіряє заголовок сторінки', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText(/введіть задачу/i);
  const addButton = screen.getByText(/Додати/i);

  fireEvent.change(inputElement, { target: { value: 'Тестове завдання' } });
  fireEvent.click(addButton);

  expect(inputElement.value).toBe('');
});
