import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const reducer = {
  counter: counterReducer,
};

export const store = configureStore({
  reducer,
});
