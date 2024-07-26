import axios from 'axios';
import { fetchPeopleRequest, fetchPeopleSuccess, fetchPeopleFailure } from '../actions/swapi.js';

export const fetchPeople = () => {
  return async (dispatch) => {
    dispatch(fetchPeopleRequest());
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      dispatch(fetchPeopleSuccess(response.data.results));
    } catch (error) {
      dispatch(fetchPeopleFailure(error.message));
    }
  };
};
