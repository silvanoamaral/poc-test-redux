import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { fetch, fetchSuccess, fetchFailure, fetchUsersAsync } from "./reducers";
import {
  fetch as commentsfetch,
  fetchSuccess as commentsfetchSuccess,
  fetchFailure as commentsfetchFailure,
  fetchCommentsAsync,
} from "../components/comments/reducers";

import { getUsers, getComments } from "../api";

function* fetchUsers() {
  yield put(fetch());

  try {
    const response = yield call(getUsers);
    yield put(fetchSuccess(response));
  } catch (err) {
    yield put(fetchFailure(err));
  }
}

function* fetchComments() {
  yield put(commentsfetch());

  try {
    const response = yield call(getComments);
    yield put(commentsfetchSuccess(response));
  } catch (err) {
    yield put(commentsfetchFailure(err));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(fetchUsersAsync, fetchUsers);
}

export function* watchFetchComments() {
  yield takeLatest(fetchCommentsAsync, fetchComments);
}

export default function* rootSaga() {
  yield all([fork(watchFetchUsers), fork(watchFetchComments)]);
}
