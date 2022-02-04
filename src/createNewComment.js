import uniqid from "uniqid";

const createNewComment = (user, content) => {
  return {
    content,
    user,
    id: uniqid(),
    createdAt: "0 second ago",
    replies: [],
    score: 0,
  };
};

export default createNewComment;
