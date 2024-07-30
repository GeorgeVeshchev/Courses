import {
    FETCH_HOTELS_REQUEST,
    FETCH_HOTELS_SUCCESS,
    FETCH_HOTELS_FAILURE,
  } from '../redux/hotelsActions.js';
  
  const initialState = {
    hotels: [],
    loading: false,
    error: null,
  };
  
  function hotelsReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_HOTELS_REQUEST:
        return { ...state, loading: true };
      case FETCH_HOTELS_SUCCESS:
        return { ...state, loading: false, hotels: action.payload };
      case FETCH_HOTELS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  export default hotelsReducer;
  