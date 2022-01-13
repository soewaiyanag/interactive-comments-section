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
      } else {
        sendComment(cmt.replies, id, reply);
      }
    });
  };

  return (
    <div
      className="my-4 grid gap-4 grid-cols-2
                bg-white shadow-sm -mt-2 p-4
                sm:grid-cols-[auto_1fr_auto]"
    >
      <img className="h-10" src={currentUser.image.png} alt="avator" />
      <textarea
        className="rounded px-5 py-2 min-h-[5rem]
                    resize-none text-base border-2
                    col-span-2 row-start-1
                    sm:col-span-1 sm:col-start-2 sm:row-start-1"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        className="py-2 px-5 bg-modrateBlue 
                text-white h-fit max-w-fit rounded 
                active:bg-opacity-75 justify-self-end"
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
