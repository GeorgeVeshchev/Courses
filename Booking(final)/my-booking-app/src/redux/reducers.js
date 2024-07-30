import { combineReducers } from 'redux';
import { routerMiddleware } from 'redux-first-history';
import destinationsReducer from './destinationsReducer.js';
import hotelsReducer from './hotelsReducer.js';

const rootReducer = (history) =>
  combineReducers({
    router: routerMiddleware(history),
    destinations: destinationsReducer,
    hotels: hotelsReducer,
  });

export default rootReducer;
