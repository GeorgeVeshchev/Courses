import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../api/api.js'; 
import { FETCH_HOTELS_REQUEST, fetchHotelsSuccess, fetchHotelsFailure } from './actions';

function* fetchHotels() {
  try {
    const response = yield call(api.get, '/hotels'); 
    yield put(fetchHotelsSuccess(response.data));
  } catch (error) {
    yield put(fetchHotelsFailure(error.message));
  }
}

function* watchFetchHotels() {
  yield takeLatest(FETCH_HOTELS_REQUEST, fetchHotels);
}

export default watchFetchHotels;
