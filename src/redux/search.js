// Using Ducks Modular Redux pattern:
// See: https://github.com/erikras/ducks-modular-redux

import { formatResults } from "../utils";

// Actions
export const ON_SEARCH = "search/ON_SEARCH";
export const ON_SEARCH_SUCCESS = "search/ON_SEARCH_SUCCESS";
export const ON_SEARCH_ERROR = "search/ON_SEARCH_ERROR";

export const initialState = {
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
    case ON_SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action?.payload,
      };
    default:
      return state;
  }
}

// Action Creators
export function onSearch(payload) {
  return { type: ON_SEARCH, payload };
}

export function onSearchSuccess(payload) {
  return { type: ON_SEARCH_SUCCESS, payload };
}

export function onSearchError(payload) {
  return { type: ON_SEARCH_ERROR, payload };
}
