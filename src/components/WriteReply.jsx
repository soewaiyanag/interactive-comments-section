import React, { useState } from "react";
import { _ } from "lodash";
import store from "../store";
import { sendReply } from "../actions";

const WriteReply = ({ id, setShowWriteReply }) => {
  const [content, setContent] = useState("");
  const { currentUser } = store.getState();

  return (
    <div className="WriteBox">
      <img className="h-10" src={currentUser.image.png} alt="avator" />
      <textarea
        className="WriteBox__textarea"
        placeholder="Add a comment..."
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
      />
      <button
        className="WriteBox__btn"
        onClick={() => {
          if (!content) return;
          store.dispatch(sendReply(id, currentUser, content));
          setShowWriteReply(false);
        }}
      >
        REPLY
      </button>
    </div>
  );
};

export default WriteReply;
