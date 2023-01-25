import * as React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { store, getStoreWithState } from "../store/store";
import UsersList from "./UsersList";

function renderWithRedux(component, state = {}) {
  let storeWithState = store;

  if (Object.keys(state).length) {
    storeWithState = getStoreWithState(state);
  }

  return { ...render(<Provider store={storeWithState}>{component}</Provider>) };
}

describe("renders with redux", () => {
  it("renders UserList with user list", async () => {
    renderWithRedux(<UsersList />);

    const elem = await screen.findByTestId(3);
  
    expect(elem).toHaveTextContent("Clementine Bauch");
  });

  it("renders UserList with 'state.loading' equal true", () => {
    renderWithRedux(<UsersList />, { users: { data: [], loading: true, error: false } });
  
    const text = "Loading...";
  
    expect(screen.getByText(text)).toHaveTextContent(text);
  });
})