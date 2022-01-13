const createNewComment = (id, content, user) => {
  return {
    id,
    content,
    user,
    createdAt: "0 second ago",
    replies: [],
    score: 0,
  };
};

export default createNewComment;
