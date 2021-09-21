import { put, takeLatest } from "redux-saga/effects";
import { ON_SEARCH, ON_SEARCH_ERROR } from "../redux/search";

function* onSearch(action) {
  try {
  } catch (e) {
    yield put({ type: ON_SEARCH_ERROR });
  }
}

export default function* searchSaga() {
  yield takeLatest(ON_SEARCH, onSearch);
}
