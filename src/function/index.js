import { ReplyObj } from "../classes";

/* SIMPLE FUNCTIONS */

// a function find user name by id in deep nested array of objects using recursion
function findUserNameById(comments, id) {
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].id === id) {
      return comments[i].user.username;
    } else if (comments[i].replies.length > 0) {
      return findUserNameById(comments[i].replies, id);
    }
  }
}

/* FOR REDUCER */
export const removeFromComments = (comments, id) => {
  return comments.filter((comment) => {
    if (comment.id === id) {
      return false;
    }
    if ("replies" in comment) {
      comment.replies = removeFromComments(comment.replies, id);
      return true;
    }
    return true;
  });
};

// search nested array of objects by id using recursion and if found edit the content
export const editComment = (comments, id, content) => {
  return comments.map((comment) => {
    if (comment.id === id) {
      comment.content = content;
    }
    if ("replies" in comment) {
      comment.replies = editComment(comment.replies, id, content);
    }
    return comment;
  });
};

// send a new reply by id and content
export const sendReply = (comments, id, user, content) => {
  return comments.map((comment) => {
    if (comment.id === id) {
      comment.replies = [
        ...comment.replies,
        new ReplyObj(user, content, findUserNameById(comments, id)),
      ];
    }
    if ("replies" in comment) {
      comment.replies = sendReply(comment.replies, id, user, content);
    }
    return comment;
  });
};
