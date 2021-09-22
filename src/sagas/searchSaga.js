import { call, put, takeLatest } from "redux-saga/effects";
import { ON_SEARCH, ON_SEARCH_ERROR, ON_SEARCH_SUCCESS } from "../redux/search";
import { onSearchApi } from "./api/searchApi";

function* onSearch(action) {
  try {
    const results = yield call(onSearchApi, action.payload);
    yield put({ type: ON_SEARCH_SUCCESS, payload: results });
  } catch (e) {
    yield put({ type: ON_SEARCH_ERROR });
  }
}

export default function* searchSaga() {
  yield takeLatest(ON_SEARCH, onSearch);
}
