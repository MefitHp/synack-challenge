import { all, call, put, takeLatest } from "redux-saga/effects";
import { ON_SEARCH, onSearchSuccess, onSearchError } from "../redux/search";
import { onSearchApi } from "./api/searchApi";

function* onSearch(action) {
  const { provider, query } = action.payload;
  try {
    if (provider === "both") {
      const promises = yield all([
        call(onSearchApi, { query, provider: "bing" }),
        call(onSearchApi, { query, provider: "google" }),
      ]);

      let results = {};

      promises.forEach((promise) => {
        results = { ...results, ...promise.data };
      });

      return yield put(onSearchSuccess({ data: results }));
    }

    const results = yield call(onSearchApi, action.payload);
    yield put(onSearchSuccess(results));
  } catch (e) {
    yield put(onSearchError(e));
  }
}

export default function* searchSaga() {
  yield takeLatest(ON_SEARCH, onSearch);
}
