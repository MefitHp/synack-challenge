import App from "./App";
import { withProvider } from "./utils/withProvider";

describe("App Test", () => {
  it("Should render main app", () => {
    const { container } = withProvider(<App />);
    expect(container).toBeInTheDocument();
  });
});
