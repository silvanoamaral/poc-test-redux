import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import counterReducer from "../features/counter/counterSlice";
import userReducer from "../user-list/reducers";
import rootSaga from "../user-list/sagas";

let sagaMiddleware = createSagaMiddleware();

export const reducer = {
  counter: counterReducer,
  users: userReducer,
};

const middlewares = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleware);

export const store = configureStore({
  reducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

// export const setupStore = (preloadedState) => {
//   return configureStore({
//     reducer,
//     preloadedState,
//     middlewares,
//   });
// };
