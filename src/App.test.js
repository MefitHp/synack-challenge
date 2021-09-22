import App from "./App";
import configureStore from "redux-mock-store";
import { withProvider } from "./utils/withProvider";

const mockStore = configureStore([]);

const results = Array(5)
  .fill()
  .map((_, idx) => ({
    title: `Item ${idx}`,
    description: `Description ${idx}`,
    link: `www.anypage.com/${idx}`,
    provider: "random",
  }));

describe("App Test", () => {
  it("Should render main app", () => {
    const { container } = withProvider(<App />);
    expect(container).toBeInTheDocument();
  });

  it("Should render a list of results", () => {
    const store = mockStore({ search: { results } });
    const { getByText } = withProvider(<App />, { store });
    expect(getByText(results[0].title)).toBeInTheDocument();
    expect(getByText(results[0].description)).toBeInTheDocument();
    expect(getByText(results[1].title)).toBeInTheDocument();
    expect(getByText(results[1].description)).toBeInTheDocument();
    expect(getByText(results[2].title)).toBeInTheDocument();
    expect(getByText(results[2].description)).toBeInTheDocument();
    expect(getByText(results[3].title)).toBeInTheDocument();
    expect(getByText(results[3].description)).toBeInTheDocument();
    expect(getByText(results[4].title)).toBeInTheDocument();
    expect(getByText(results[4].description)).toBeInTheDocument();
  });

  it("Should show errors", () => {
    const store = mockStore({ search: { error: "random error" } });
    const { getByText } = withProvider(<App />, { store });
    expect(
      getByText("There was en error while trying to fetch:")
    ).toHaveTextContent("random error");
  });
});
