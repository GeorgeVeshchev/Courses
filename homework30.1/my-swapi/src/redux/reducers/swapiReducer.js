import { FETCH_PEOPLE_REQUEST, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAILURE, CLEAR_TODO } from '../actions/swapi.js';

const initialState = {
  loading: false,
  people: [],
  error: '',
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        people: action.payload,
      };
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_TODO:
      return {
        ...state,
        people: [],
      };
    default:
      return state;
  }
};

export default peopleReducer;
