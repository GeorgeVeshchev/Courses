import { combineReducers } from 'redux';
import  hotelsReducer  from './hotelsReducer.js';

const rootReducer = combineReducers({
  hotels: hotelsReducer,
});

export default rootReducer;
