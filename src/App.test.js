import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { responseMocks } from "../setup-tests/mocks";
import App from "./App";

import { render } from "./test-utils";

function renderApp() {
  render(<App />);
}

describe("Integration Testing of Component", () => {
  it("renders learn react link", () => {
    renderApp();

    expect(screen.getByText(/learn/i)).toBeInTheDocument();
  });

  it('click button "increment"', async () => {
    renderApp();

    const increment = screen.getByLabelText(/Increment value/i);

    fireEvent.click(increment);

    const inputCount = await screen.findByLabelText(/count/i);

    expect(inputCount.innerHTML).toBe("1");
  });

  it('click button "Decrement"', async () => {
    renderApp();

    const initialState = await screen.findByLabelText(/count/i);
    expect(initialState.innerHTML).toBe("0");

    const decrement = await screen.findByLabelText(/Decrement value/i);

    fireEvent.click(decrement);

    const inputCount = await screen.findByLabelText(/count/i);
    expect(inputCount.innerHTML).toBe("-1");
  });

  it("incrementAsync", async () => {
    renderApp();

    const buttonAsync = screen.getByText("Add Async");

    fireEvent.click(buttonAsync);

    await waitFor(async () => {
      const count = await screen.findByLabelText(/count/i);
      expect(count.innerHTML).toBe("2");
    });
  });
});

describe("msw", () => {
  it("should fetch and display asynchronous zipcode", async () => {
    renderApp();

    const input = screen.getByPlaceholderText("Search zipcode");

    fireEvent.input(input, { target: { value: "01234568" } });

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("01234568");

    await waitFor(async () => {
      const count = screen.getByRole("article");

      expect(JSON.parse(count.innerHTML)).toEqual(responseMocks);
    });
  });
});
