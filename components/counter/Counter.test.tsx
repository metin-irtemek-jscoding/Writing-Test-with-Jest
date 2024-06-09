import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Counter } from "./Counter";

describe("Counter Tests", () => {
  test("the component should be render", () => {
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

  test("the result should be 0", () => {
    render(<Counter />);
    const countElement = screen.getByTestId("result");
    expect(countElement).toHaveTextContent("0");
  });

  test("the result should be 1 after clicking the Increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByTestId("result");
    expect(countElement).toHaveTextContent("1");
  });

  test("the result should be 3 after clicking the Increment button 3 times", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByTestId("result");
    expect(countElement).toHaveTextContent("3");
  });

  test("the result should be 5 after clicking the Set Initial Value button", async () => {
    user.setup();
    render(<Counter />);
    const firstValueInput = screen.getByRole("spinbutton");
    await user.type(firstValueInput, "5");
    expect(firstValueInput).toHaveValue(5);
    const setButton = screen.getByRole("button", { name: "Set First Value" });
    await user.click(setButton);
    const countElement = screen.getByTestId("result");
    expect(countElement).toHaveTextContent("5");
  });
});
