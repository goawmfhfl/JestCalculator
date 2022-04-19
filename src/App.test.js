import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counter start at 0", () => {
  render(<App />);
  const counterElement = screen.queryByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});
