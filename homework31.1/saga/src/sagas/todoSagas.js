import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODOS, loadTodosSuccess, loadTodosFailure } from '../actions/index.js';

const fetchTodosFromAPI = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, text: 'Sample TODO', completed: false }]), 1000)
  );
};

function* loadTodosSaga() {
  try {
    const todos = yield call(fetchTodosFromAPI);
    yield put(loadTodosSuccess(todos));
  } catch (error) {
    yield put(loadTodosFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(LOAD_TODOS, loadTodosSaga);
}

export default rootSaga;
