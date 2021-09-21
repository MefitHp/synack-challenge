import { all, fork } from "redux-saga/effects";
import searchSaga from "./searchSaga";

function* combineSagas() {
  yield all([fork(searchSaga)]);
}

export default combineSagas;
