import React, { useState, useContext } from "react";
import UserContext from "../CurrentUserContext";
import uniqid from "uniqid";
import { _ } from "lodash";
import createNewComment from "../createNewComment";

const WriteReply = (props) => {
  const [content, setContent] = useState("");
  const { comments, setComments, currentUser } = useContext(UserContext);

  // clone the comments(array of objs) so that it won't affect comments[state]
  const commentsClone = comments.map((cmt) => Object.assign({}, cmt));

  const sendComment = (cmts, id, reply) => {
    cmts.forEach((cmt) => {
      if (_.isEqual(cmt.id, id)) {
        cmt.replies.push(reply);
        setComments(commentsClone);
        props.setShowWriteReply(false);
      } else {
        sendComment(cmt.replies, id, reply);
      }
    });
  };

  return (
    <div className="WriteBox">
      <img className="h-10" src={currentUser.image.png} alt="avator" />
      <textarea
        className="WriteBox__textarea"
        placeholder="Add a comment..."
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        className="WriteBox__btn"
        onClick={() => {
          if (!content) return;
          let newComment = createNewComment(uniqid(), content, currentUser);
          sendComment(commentsClone, props.id, newComment);
        }}
      >
        {props.btnValue}
      </button>
    </div>
  );
};

export default WriteReply;
