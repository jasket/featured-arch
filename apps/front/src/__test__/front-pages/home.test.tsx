import React from "react";
import { render, screen } from "@testing-library/react";
import PageHome from "@front/pages/home";

test("renders learn react link", () => {
  render(<PageHome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
