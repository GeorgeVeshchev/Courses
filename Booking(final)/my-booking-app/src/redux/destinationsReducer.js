import {
    FETCH_DESTINATIONS_REQUEST,
    FETCH_DESTINATIONS_SUCCESS,
    FETCH_DESTINATIONS_FAILURE,
  } from '../redux/destinationsActions.js';
  
  const initialState = {
    destinations: [],
    loading: false,
    error: null,
  };
  
  function destinationsReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_DESTINATIONS_REQUEST:
        return { ...state, loading: true };
      case FETCH_DESTINATIONS_SUCCESS:
        return { ...state, loading: false, destinations: action.payload };
      case FETCH_DESTINATIONS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  export default destinationsReducer;
  