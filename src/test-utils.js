import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import { reducer } from "./App/store";

const render = (
  ui,
  // options argument includes the additional redux options
  options = {}
) => {
  // destructure additional properties from the options and set defaults
  const {
    initialState = undefined,
    store = configureStore({ reducer: reducer }, initialState),
    ...renderOptions
  } = options;

  // define a new Wrapper which includes a redux store Provider
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return {
    // call the regular RTL render function
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    // return store alongside the the other return values
    store,
  };
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
