export const FETCH_PEOPLE_REQUEST = 'FETCH_PEOPLE_REQUEST';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAILURE = 'FETCH_PEOPLE_FAILURE';
export const CLEAR_TODO = 'CLEAR_TODO';

export const fetchPeopleRequest = () => ({
  type: FETCH_PEOPLE_REQUEST,
});

export const fetchPeopleSuccess = (people) => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload: people,
});

export const fetchPeopleFailure = (error) => ({
  type: FETCH_PEOPLE_FAILURE,
  payload: error,
});

export const clearTodo = () => ({
  type: CLEAR_TODO,
});
