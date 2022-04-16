import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const indexTest = screen.queryByText(/안녕하세요/i);
  expect(indexTest).toBeInTheDocument();
});
