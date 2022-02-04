import React, { useState } from "react";
import { _ } from "lodash";
import createNewComment from "../createNewComment";
import store from "../store";
import { sendComment } from "../actions";

const WriteComment = (props) => {
  const [content, setContent] = useState("");
  const { comments, currentUser } = store.getState();

  // clone the comments(array of objs) so that it won't affect comments[state]
  const commentsClone = comments.map((cmt) => Object.assign({}, cmt));

  return (
    <div className="WriteBox">
      <img className="h-10" src={currentUser.image.png} alt="avator" />
      <textarea
        className="WriteBox__textarea"
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        className="WriteBox__btn"
        onClick={() => {
          if (!content) return;
          store.dispatch(sendComment(currentUser, content));
          setContent("");
        }}
      >
        {props.btnValue}
      </button>
    </div>
  );
};

export default WriteComment;
