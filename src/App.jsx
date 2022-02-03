import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Comment from "./components/Comment";
import UserContext from "./CurrentUserContext";
import WriteComment from "./components/WriteComment";
import useStickyState from "./hook/useStickyState";
import store from "./store";

const App = () => {
  const { currentUser, comments } = store.getState();

  return (
    <div className="min-h-screen max-w-[44rem] my-10 mx-auto">
      {comments.map((comment) => {
        return (
          <Comment key={comment.id} data={comment}>
            {comment.content}
          </Comment>
        );
      })}
      <div className="my-6">
        <WriteComment btnValue="SEND" />
      </div>
    </div>
  );
};

export default App;
