import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import hotelsReducer from './hotelsSlice.js';

export const history = createBrowserHistory();

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
});

export default store;
