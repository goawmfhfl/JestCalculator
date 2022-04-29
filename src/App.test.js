import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  //   const likeElement = screen.getByText(/learn react/i);
  //   expect(likeElement).toBeInTheDocument();
  //   const linkTest = screen.getByRole("button", {
  //     name: "lintTest",
  //   });
  //   expect(linkTest.textContent).toHaveTextContent("lintTest");
});
