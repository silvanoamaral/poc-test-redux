import * as React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";

import { store } from "../../store/store";
import Comments from "./Comments";

function renderWithRedux(component, store = {}) {
  return { ...render(<Provider store={store}>{component}</Provider>) };
}

it("fires play and renders with redux", async () => {
  renderWithRedux(<Comments />, store);

  fireEvent.click(screen.getByText("Play"));

  const elem = await screen.findByTestId("comments");
  expect(elem).toBeTruthy();
});
