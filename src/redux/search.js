// Using Ducks Modular Redux pattern:
// See: https://github.com/erikras/ducks-modular-redux

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
    // do reducer stuff
    default:
      return state;
  }
}

// Action Creators
export function onSearch() {
  return { type: ON_SEARCH };
}

export function onSeachSuccess() {
  return { type: ON_SEARCH_SUCCESS };
}

export function onSearchError() {
  return { type: ON_SEARCH_ERROR };
}
