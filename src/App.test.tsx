import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./pages/Main";

test("renders the correct text", () => {
  render(<Main />);
  const textElement = screen.getByText(/Esse é o template Typescript para React./i);
  expect(textElement).toBeInTheDocument();
});
