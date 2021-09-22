// Using Ducks Modular Redux pattern:
// See: https://github.com/erikras/ducks-modular-redux

import { formatResults } from "../utils";

// Actions
export const ON_SEARCH = "search/ON_SEARCH";
export const ON_SEARCH_SUCCESS = "search/ON_SEARCH_SUCCESS";
export const ON_SEARCH_ERROR = "search/ON_SEARCH_ERROR";

const initialState = {
  results: null,
  isLoading: false,
  error: null,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ON_SEARCH:
      return {
        ...state,
        isLoading: true,
      };
    case ON_SEARCH_SUCCESS:
      const { data } = action?.payload;
      return {
        ...state,
        results: formatResults(data),
        isLoading: false,
      };
    default:
      return state;
  }
}

// Action Creators
export function onSearch(payload) {
  return { type: ON_SEARCH, payload };
}

export function onSeachSuccess() {
  return { type: ON_SEARCH_SUCCESS };
}

export function onSearchError() {
  return { type: ON_SEARCH_ERROR };
}
