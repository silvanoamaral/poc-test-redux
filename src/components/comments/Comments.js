import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  clear,
  selectError,
  selectLoading,
  selectComments,
  fetchCommentsAsync,
} from "./reducers";

const Comments = () => {
  const comments = useSelector(selectComments);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <section className="section">
      <h1 className="title">Comments</h1>
      {error && <p className="notification is-danger">Error!!</p>}
      {loading && <p className="notification is-info">Loading...</p>}

      <hr />
      <div className="buttons">
        <button
          className="button is-primary is-rounded"
          onClick={() => dispatch(fetchCommentsAsync())}
        >
          Play
        </button>
        <button className="button is-rounded" onClick={() => dispatch(clear())}>
          Clear
        </button>
        {comments.length > 0 && <p data-testid="comments">Comentários</p>}
      </div>
    </section>
  );
};

export default Comments;
