import React, { useState, useContext } from "react";
import ReplyIcon from "./ReplyIcon";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import Score from "./Score";
import Status from "./Status";
import Reply from "./Reply";
import WriteReply from "./WriteReply";
import UserContext from "./CurrentUserContext";

const Comment = (props) => {
  const [showWriteReply, setShowWriteReply] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [message, setMessage] = useState(props.children);

  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser.username === props.name;

  const replyClickHandler = () => {
    setShowWriteReply(!showWriteReply);
  };

  const editClickHandler = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div>
      <section
        className="
      p-4 my-4 bg-white rounded-md shadow-sm
      gap-6 grid grid-cols-2 
      sm:grid-cols-[auto_1fr_auto]"
      >
        <Score score={props.score} />
        <Status
          avatar={props.avatar}
          name={props.name}
          createdAt={props.createdAt}
        />
        <section
          className="cursor-pointer ml-auto
                      col-start-2 row-start-3 self-center
                      sm:row-start-1"
        >
          {isCurrentUser ? (
            <div className="flex gap-5">
              <DeleteIcon />
              <EditIcon clickHandler={editClickHandler} />
            </div>
          ) : (
            <ReplyIcon clickHandler={replyClickHandler} />
          )}
        </section>
        <section
          className="
            text-grayishBlue text-base font-normal
            col-span-2 sm:col-span-2 sm:col-start-2
            sm:row-span-2"
        >
          {isEditable ? (
            <div className="flex flex-col gap-4">
              <textarea
                className="
                w-full
                rounded px-5 py-2 min-h-[10rem]
                resize-none text-base border-2"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button
                className="py-2 px-5 bg-modrateBlue 
                text-white h-fit max-w-fit rounded 
                active:bg-opacity-75 self-end"
              >
                UPDATE
              </button>
            </div>
          ) : (
            <p>{message}</p>
          )}
        </section>
      </section>
      <section>{isCurrentUser}</section>
      <section>{showWriteReply ? <WriteReply /> : null}</section>
      <section className="border-l-2 pl-5 sm:ml-8 sm:pl-7">
        {props.replies ? <Reply replies={props.replies} /> : null}
      </section>
    </div>
  );
};

export default Comment;
