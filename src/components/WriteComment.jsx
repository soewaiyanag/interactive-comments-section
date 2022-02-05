import React, { useState } from "react";
import { _ } from "lodash";
import store from "../store";
import { sendComment } from "../actions";

const WriteComment = (props) => {
  const [content, setContent] = useState("");
  const { currentUser } = store.getState();

  return (
    <div className="WriteBox">
      <img className="h-10" src={currentUser.image} alt="avator" />
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
