import { render, screen } from "@testing-library/react";
import IndexTest from "./IndexTest";

test("배운거 써먹기", () => {
  render(<IndexTest />);
  const testText = screen.queryByText(/인덱스테스트/i);
  expect(testText).toBeInTheDocument();
});
