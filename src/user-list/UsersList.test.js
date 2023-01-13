import * as React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { store } from "../app/store";
import UsersList from "./UsersList";

function renderWithRedux(component, store = {}) {
  return { ...render(<Provider store={store}>{component}</Provider>) };
}

it("renders with redux", async () => {
  renderWithRedux(<UsersList />, store);

  const elem = await screen.findByTestId(3);

  expect(elem).toHaveTextContent("Clementine Bauch");
});
