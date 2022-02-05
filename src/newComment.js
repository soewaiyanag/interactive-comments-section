import uniqid from "uniqid";

const newComment = (user, content) => {
  return {
    content,
    user,
    id: uniqid(),
    createdAt: "0 second ago",
    replies: [],
    score: 0,
  };
};

export default newComment;
