import { render } from "@testing-library/react";
import ResultItem from "..";

describe("ResultItem Test", () => {
  const props = {
    title: "Item Title",
    description: "Item Description",
    link: "www.google.com",
    provider: "google",
  };

  it("Should render blank item", () => {
    const { container } = render(<ResultItem />);
    expect(container).toBeInTheDocument();
  });

  it("Should render full item", () => {
    const { getByText } = render(<ResultItem {...props} />);
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
    expect(getByText(props.provider)).toBeInTheDocument();
    expect(document.querySelector("a").getAttribute("href")).toBe(props.link);
  });
});
