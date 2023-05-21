import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

test("initialCount に 1 を渡すと「現在のカウント:1」と表示されるか", () => {
  // arrange
  render(<Counter initialCount={1} />);

  // act (なし)

  // assetion
  const element = screen.getByText("現在のカウント:1");
  expect(element).toBeInTheDocument();
});

test("「カウントアップ」押下で現在のカウントが+1されるか", () => {
  // arrange
  render(<Counter initialCount={0} />);

  // act (ボタンをクリック)
  const button = screen.getByRole("button");
  fireEvent.click(button);

  // assetion
  const element = screen.getByText("現在のカウント:1");
  expect(element).toBeInTheDocument();
});
