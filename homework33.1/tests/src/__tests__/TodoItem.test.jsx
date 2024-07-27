import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from '../redux/reducers/todoReducer.js';
import TodoItem from '../components/TodoItem.jsx';

const store = createStore(todoReducer);

test('перевіряє позначення задачі як виконаної', () => {
  const todo = { id: 1, text: 'Тестове завдання', completed: false };

  render(
    <Provider store={store}>
      <TodoItem todo={todo} />
    </Provider>
  );

  const toggleButton = screen.getByText(/Позначити як виконану/i);
  fireEvent.click(toggleButton);

  expect(screen.getByText(/Тестове завдання/i)).toHaveClass('completed');
});
