import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DESTINATIONS_REQUEST,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
} from '../redux/destinationsActions.js';
import {
  FETCH_HOTELS_REQUEST,
  fetchHotelsSuccess,
  fetchHotelsFailure,
} from '../redux/hotelsActions.js';

function* fetchDestinations() {
  try {
    const response = yield call(axios.get, 'http://localhost:3333/destinations');
    yield put(fetchDestinationsSuccess(response.data));
  } catch (e) {
    yield put(fetchDestinationsFailure(e.message));
  }
}

function* fetchHotels() {
  try {
    const response = yield call(axios.get, 'http://localhost:3333/hotels');
    yield put(fetchHotelsSuccess(response.data));
  } catch (e) {
    yield put(fetchHotelsFailure(e.message));
  }
}

function* rootSaga() {
  yield all([
    takeEvery(FETCH_DESTINATIONS_REQUEST, fetchDestinations),
    takeEvery(FETCH_HOTELS_REQUEST, fetchHotels),
  ]);
}

export default rootSaga;
