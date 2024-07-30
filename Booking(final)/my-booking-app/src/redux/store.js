import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import rootSaga from './sagas';

const history = createBrowserHistory();
const { createReduxHistory, reduxFirstHistoryMiddleware } = createReduxHistoryContext({
  history,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  applyMiddleware(sagaMiddleware, reduxFirstHistoryMiddleware)
);

sagaMiddleware.run(rootSaga);

export { store, history };
