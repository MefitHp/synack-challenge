import { formatResults } from "../../utils";
import reducer, {
  onSearch,
  onSearchError,
  initialState,
  onSearchSuccess,
} from "../search";

describe("Test search reducer", () => {
  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("Should put a loading flag when search is attempted", () => {
    expect(reducer(initialState, onSearch())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("Should return and list of results if the attempted search succeded", () => {
    const results = {
      data: {
        items: [
          {
            name: "Item name",
            displayUrl: "www.google.com",
            snippet: "Item des",
          },
        ],
      },
    };
    const formattedResults = formatResults(results.data);

    expect(reducer(initialState, onSearchSuccess(results))).toEqual({
      ...initialState,
      results: formattedResults,
    });
  });

  it("Should return and error if the attempted search fails", () => {
    expect(reducer(initialState, onSearchError("ERROR"))).toEqual({
      ...initialState,
      error: "ERROR",
    });
  });
});
