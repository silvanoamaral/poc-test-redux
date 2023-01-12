import { createSlice, createAction } from "@reduxjs/toolkit";

const usersInitialState = {
  data: [],
  loading: false,
  error: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    fetch: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchFailure: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default usersSlice.reducer;

export const { fetch, fetchSuccess, fetchFailure } = usersSlice.actions;

export const selectUsers = (state) => state.users?.data || [];

export const selectLoading = (state) => state.users?.loading || false;

export const selectError = (state) => state.users?.error || false;

export const fetchUsersAsync = createAction("USERS_FETCH_ASYNC");
