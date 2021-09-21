import { put, takeLatest } from "redux-saga/effects";
import { ON_SEARCH, ON_SEARCH_ERROR } from "../redux/search";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* onSearch(action) {
  try {
  } catch (e) {
    yield put({ type: ON_SEARCH_ERROR });
  }
}

function* searchSaga() {
  yield takeLatest(ON_SEARCH, onSearch);
}

export default searchSaga;
