import newComment from "../newComment";

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
      comment.replies = [...comment.replies, newComment(user, content)];
    }
    if ("replies" in comment) {
      comment.replies = sendReply(comment.replies, id, user, content);
    }
    return comment;
  });
};

/* SIMPLE FUNCTIONS */
