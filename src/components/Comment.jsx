import React, { useState } from "react";
import ReplyIcon from "./ReplyIcon";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import Score from "./Score";
import Status from "./Status";
import WriteReply from "./WriteReply";
import DeleteModel from "./DeleteModel";
import Mention from "./Mention";
import { _ } from "lodash";
import store from "../store";
import { updateComment, deleteComment } from "../actions";

const Comment = ({ comment, children }) => {
  /*---- STATES ----*/

  const [showWriteReply, setShowWriteReply] = useState(false);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(children);
  const { currentUser } = store.getState();

  /*---- VARIABLES ----*/

  const isCurrentUser = currentUser.username === comment.user.username;

  /*---- EVENT HANDLERS ----*/

  function replyClickHandler() {
    setShowWriteReply(!showWriteReply);
  }

  function editClickHandler() {
    setIsEditable(!isEditable);
  }

  return (
    <div>
      {showDeleteModel ? (
        <DeleteModel
          deleteHandler={() => {
            store.dispatch(deleteComment(comment.id));
            setShowDeleteModel(false);
          }}
          cancelHandler={() => {
            setShowDeleteModel(false);
          }}
        />
      ) : null}
      <div
        className="
      p-4 my-4 bg-white rounded-md shadow-sm
      gap-y-6 grid grid-cols-[auto_auto] 
      md:grid-cols-[auto_1fr_auto] md:gap-x-6"
      >
        <Score score={comment.score} />
        <Status
          avatar={comment.user.image}
          username={comment.user.username}
          createdAt={comment.createdAt}
        />
        <div
          className="cursor-pointer ml-auto
                      col-start-2 row-start-3 self-center
                      md:row-start-1"
          role="figure"
        >
          {isCurrentUser ? (
            <div className="flex gap-5">
              <DeleteIcon
                clickHandler={() => {
                  setShowDeleteModel(true);
                }}
              />
              <EditIcon clickHandler={editClickHandler} />
            </div>
          ) : (
            <ReplyIcon clickHandler={replyClickHandler} />
          )}
        </div>
        <div
          className="
            text-grayishBlue text-base font-normal
            col-span-2 md:col-span-2 md:col-start-2
            md:row-span-2"
          role="textbox"
        >
          {isEditable ? (
            <div className="flex flex-col gap-4">
              <textarea
                className="
                w-full
                rounded px-5 py-2 min-h-[8rem]
                resize-none text-base border-2"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
              <button
                className="py-2 px-5 bg-modrateBlue
                text-white h-fit max-w-fit rounded 
                active:bg-opacity-75 self-end"
                onClick={() => {
                  store.dispatch(updateComment(comment.id, content));
                  setIsEditable(false);
                }}
              >
                UPDATE
              </button>
            </div>
          ) : (
            <p>
              {!!comment.replyingTo ? (
                <Mention user={comment.replyingTo + " "} />
              ) : null}
              {content}
            </p>
          )}
        </div>
      </div>
      <div>
        {showWriteReply ? (
          <WriteReply id={comment.id} setShowWriteReply={setShowWriteReply} />
        ) : null}
      </div>
      <div className="border-l-2 pl-5 md:ml-8 md:pl-8">
        {comment?.replies
          ? comment.replies.map((reply) => {
              return (
                <Comment key={reply.id} comment={reply}>
                  {reply.content}
                </Comment>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Comment;
