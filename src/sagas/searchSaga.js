import { all, call, put, takeLatest } from "redux-saga/effects";
import { ON_SEARCH, ON_SEARCH_ERROR, ON_SEARCH_SUCCESS } from "../redux/search";
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

      return yield put({ type: ON_SEARCH_SUCCESS, payload: { data: results } });
    }

    const results = yield call(onSearchApi, action.payload);
    yield put({ type: ON_SEARCH_SUCCESS, payload: results });
  } catch (e) {
    console.error({ e });
    yield put({ type: ON_SEARCH_ERROR, payload: e });
  }
}

export default function* searchSaga() {
  yield takeLatest(ON_SEARCH, onSearch);
}
