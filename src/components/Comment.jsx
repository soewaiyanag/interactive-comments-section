import React, { useState, useContext } from "react";
import ReplyIcon from "./ReplyIcon";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import Score from "./Score";
import Status from "./Status";
import WriteReply from "./WriteReply";
import UserContext from "../CurrentUserContext";
import { _ } from "lodash";

const Comment = (props) => {
  /*---- STATES ----*/

  const [showWriteReply, setShowWriteReply] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [content, setContent] = useState(props.children);

  /*---- VARIABLES ----*/

  const { comments, setComments, currentUser } = useContext(UserContext);
  const isCurrentUser = currentUser.username === props.data.user.username;
  // clone the comments(array of objs) so that it won't affect comments[state]
  const commentsClone = comments.map((cmt) => Object.assign({}, cmt));

  /*---- FUNCTIONS ----*/

  const updateContent = (cmts, id) => {
    cmts.forEach((cmt) => {
      if (_.isEqual(cmt.id, id)) {
        cmt.content = content;
        setComments(commentsClone);
      } else {
        updateContent(cmt.replies, id);
      }
    });
  };

  const deleteComment = (comments, id) => {
    return comments
      .map((cmt) => {
        return { ...cmt };
      })
      .filter((cmt) => {
        if ("replies" in cmt) {
          cmt.replies = deleteComment(cmt.replies, id);
        }
        return cmt.id !== id;
      });
  };

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
      gap-y-6 grid grid-cols-[auto_auto] 
      md:grid-cols-[auto_1fr_auto] md:gap-x-6"
      >
        <Score score={props.data.score} />
        <Status
          avatar={props.data.user.image.png}
          username={props.data.user.username}
          createdAt={props.data.createdAt}
        />
        <section
          className="cursor-pointer ml-auto
                      col-start-2 row-start-3 self-center
                      md:row-start-1"
        >
          {isCurrentUser ? (
            <div className="flex gap-5">
              <DeleteIcon
                clickHandler={() => {
                  setComments(deleteComment(commentsClone, props.data.id));
                }}
              />
              <EditIcon clickHandler={editClickHandler} />
            </div>
          ) : (
            <ReplyIcon clickHandler={replyClickHandler} />
          )}
        </section>
        <section
          className="
            text-grayishBlue text-base font-normal
            col-span-2 md:col-span-2 md:col-start-2
            md:row-span-2"
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
                  updateContent(commentsClone, props.data.id);
                  setIsEditable(false);
                }}
              >
                UPDATE
              </button>
            </div>
          ) : (
            <p>{content}</p>
          )}
        </section>
      </section>
      <section>
        {showWriteReply ? (
          <WriteReply
            id={props.data.id}
            setShowWriteReply={setShowWriteReply}
            btnValue="REPLY"
          />
        ) : null}
      </section>
      <section className="border-l-2 pl-5 md:ml-8 md:pl-7">
        {props.data.replies.length
          ? props.data.replies.map((reply) => {
              return (
                <Comment key={reply.id} data={reply}>
                  {reply.content}
                </Comment>
              );
            })
          : null}
      </section>
    </div>
  );
};

export default Comment;
