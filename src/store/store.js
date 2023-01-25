import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import counterReducer from "../features/counter/counterSlice";
import userReducer from "../user-list/reducers";
import { commentsReducer } from "../components";

import rootSaga from "../user-list/sagas";

let sagaMiddleware = createSagaMiddleware();

export const reducer = {
  counter: counterReducer,
  users: userReducer,
  comments: commentsReducer.default,
};

const middlewares = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleware);

export const store = configureStore({
  reducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});

export function getStoreWithState(preloadedState) {
  return configureStore({ reducer, preloadedState, middleware: middlewares, });
}

sagaMiddleware.run(rootSaga);

