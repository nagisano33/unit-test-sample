import { render, screen } from "@testing-library/react";

import { Greet } from "./Greet";

test("「こんにちは」が存在するかどうか", () => {
  render(<Greet />);
  const element = screen.getByText("こんにちは");
  expect(element).toBeInTheDocument();
});
