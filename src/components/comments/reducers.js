import { createSlice, createAction } from "@reduxjs/toolkit";

const commentsInitialState = {
  data: "",
  loading: false,
  error: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsInitialState,
  reducers: {
    fetch: (state) => {
      state.loading = true;
      state.error = false;
      state.data = "";
    },
    clear: (state) => {
      state.loading = false;
      state.error = false;
      state.data = "";
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

export default commentsSlice.reducer;

export const { fetch, clear, fetchSuccess, fetchFailure } =
  commentsSlice.actions;

export const selectComments = (state) => state.comments?.data;
export const selectLoading = (state) => state.comments?.loading;
export const selectError = (state) => state.comments?.error;

export const fetchCommentsAsync = createAction("COMMENTS_FETCH_ASYNC");
