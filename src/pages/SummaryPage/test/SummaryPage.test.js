import { render, screen } from "@testing-library/react";
import SummaryPage from "../SummaryPage";

test("checkbox and button", () => {
  render(<SummaryPage />);
  const checkBox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  expect(checkBox.checked).toEqual(false);

  const submitButton = screen.getByRole("button", { name: "주문 확인" });
  expect(submitButton.disabled).toBeTruthy();
});
