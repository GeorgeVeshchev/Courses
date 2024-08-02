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
      case 'SEARCH_HOTELS':
        const { destination = '', checkIn = '', checkOut = '' } = action.payload || {};
        return {
          ...state,
          searchParams: {
            destination,
            checkIn,
            checkOut
          }
        };
      case 'FETCH_HOTELS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_HOTELS_SUCCESS':
        return {
          ...state,
          hotels: action.payload,
          loading: false,
        };
      case 'FETCH_HOTELS_FAILURE':
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
  