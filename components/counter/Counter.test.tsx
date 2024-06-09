import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Counter } from "./Counter";

describe("Counter Tests", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByTestId("result");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
    const amountInput = screen.getByRole("spinbutton");
    expect(amountInput).toBeInTheDocument();
    const setButton = screen.getByRole("button", { name: "Set First Value" });
    expect(setButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByTestId("result");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByTestId("result");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 3 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByTestId("result");
    expect(countElement).toHaveTextContent("3");
  });

  test("rendres a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const firstValueInput = screen.getByRole("spinbutton");
    await user.type(firstValueInput, "10");
    expect(firstValueInput).toHaveValue(10);
    const setButton = screen.getByRole("button", { name: "Set First Value" });
    await user.click(setButton);
    const countElement = screen.getByTestId("result");
    expect(countElement).toHaveTextContent("10");
  });
});
