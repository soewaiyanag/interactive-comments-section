import React, { useState, useContext } from "react";
import ReplyIcon from "./ReplyIcon";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import Score from "./Score";
import Status from "./Status";
import WriteComment from "./WriteComment";
import UserContext from "../CurrentUserContext";
import { _ } from "lodash";

const Comment = (props) => {
  /*---- STATES ----*/
  const [showWriteComment, setShowWriteComment] = useState(false);
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
    setShowWriteComment(!showWriteComment);
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
        <Score score={props.data.score} />
        <Status
          avatar={props.data.user.image.png}
          username={props.data.user.username}
          createdAt={props.data.createdAt}
        />
        <section
          className="cursor-pointer ml-auto
                      col-start-2 row-start-3 self-center
                      sm:row-start-1"
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
            col-span-2 sm:col-span-2 sm:col-start-2
            sm:row-span-2"
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
        {showWriteComment ? (
          <WriteComment id={props.data.id} btnValue="REPLY" />
        ) : null}
      </section>
      <section className="border-l-2 pl-5 sm:ml-8 sm:pl-7">
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
