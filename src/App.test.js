import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counter start at 0", () => {
  render(<App />);
  // data-testid="counter"
  const counterElement = screen.queryByTestId("counter");
  // <h3 data-testid="counter">{counter}</h3> 안에있는 요소 접근하기
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct test", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plut button has correct test", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});
