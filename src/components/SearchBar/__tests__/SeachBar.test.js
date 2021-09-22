import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import SearchBar from "..";
import { withProvider } from "../../../utils/withProvider";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

afterEach(cleanup);
describe("SearchBar Test", () => {
  it("Should render SearchBar", () => {
    const { container } = withProvider(<SearchBar />);
    expect(container).toBeInTheDocument();
  });

  it("Should interact with search input", () => {
    const { queryByPlaceholderText } = withProvider(<SearchBar />);
    const searchInput = queryByPlaceholderText("Search here..");
    fireEvent.change(searchInput, { target: { value: "Search query" } });
    expect(searchInput.value).toBe("Search query");
  });

  it("Should show loading state on button when isLoading is true", () => {
    const store = mockStore({ search: { isLoading: true } });
    const { queryByText } = withProvider(<SearchBar />, {
      store,
    });
    const searchButton = queryByText("Loading..");
    expect(searchButton).toBeInTheDocument();
  });

  it("Should fire Search on Button click", () => {
    const store = mockStore();
    const { queryByPlaceholderText, queryByText } = withProvider(
      <SearchBar />,
      { store }
    );
    const searchInput = queryByPlaceholderText("Search here..");
    fireEvent.change(searchInput, { target: { value: "Search query" } });
    const searchButton = queryByText("Search");
    fireEvent.click(searchButton);
    const loadingSearchButton = queryByText("Loading..");
    expect(loadingSearchButton).toBeInTheDocument();
  });
});
