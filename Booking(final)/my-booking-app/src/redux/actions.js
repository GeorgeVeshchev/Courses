export const FETCH_HOTELS_REQUEST = 'FETCH_HOTELS_REQUEST';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';


export const fetchHotelsRequest = () => ({
  type: FETCH_HOTELS_REQUEST,
});

export const fetchHotelsSuccess = (hotels) => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchHotelsFailure = (error) => ({
  type: FETCH_HOTELS_FAILURE,
  payload: error,
});


export const searchHotels = (searchParams) => ({
    type: 'SEARCH_HOTELS',
    payload: searchParams
});
  