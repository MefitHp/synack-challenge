import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import combineSagas from "../sagas";

import searchReducer from "./search";
export const rootReducer = combineReducers({
  search: searchReducer,
});

const configureStore = () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // mount it on the Store
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return {
    middleware: sagaMiddleware,
    rootSaga: combineSagas,
    store,
  };
};

export default configureStore;
