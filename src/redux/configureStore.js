import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import searchReducer from "./search";
import rootSaga from "./../sagas";

const rootReducer = combineReducers({
  search: searchReducer,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
  )
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
