import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from '../reducers/todoReducer.js';
import TodoForm from './TodoForm.js';
import Footer from './Footer.js';
import './TodoForm.css'; 
import './Footer.css'; 

const store = createStore(todoReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoForm />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
