import { FETCH_HOTELS_REQUEST, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILURE, SEARCH_HOTELS } from './actions.js'; 

const initialState = {
  hotels: [],
  loading: false,
  error: null,
  searchParams: {
    destination: '',
    checkIn: '',
    checkOut: ''
  }
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_HOTELS:
      return {
        ...state,
        searchParams: action.payload
      };
    case FETCH_HOTELS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOTELS_SUCCESS:
      return {
        ...state,
        hotels: action.payload,
        loading: false,
      };
    case FETCH_HOTELS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default hotelsReducer;
