import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Counter from './components/Counter.jsx';
import CounterButtons from './components/CounterButtons.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <CounterButtons />
      </div>
    </Provider>
  );
}

export default App;
