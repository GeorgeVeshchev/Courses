import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from '../redux/reducers/todoReducer.js';
import Filter from '../components/Filter';

const store = createStore(todoReducer);

test('перевіряє фільтрацію задач', () => {
  render(
    <Provider store={store}>
      <Filter />
    </Provider>
  );

  const allButton = screen.getByText(/Всі/i);
  const activeButton = screen.getByText(/Активні/i);
  const completedButton = screen.getByText(/Виконані/i);

  fireEvent.click(allButton);
  expect(allButton).toHaveClass('active');

  fireEvent.click(activeButton);
  expect(activeButton).toHaveClass('active');

  fireEvent.click(completedButton);
  expect(completedButton).toHaveClass('active');
});
