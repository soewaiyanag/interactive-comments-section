export const sendComment = (user, content) => {
  return {
    type: "SEND_COMMENT",
    user,
    content,
  };
};

export const updateComment = (id, content) => {
  return {
    type: "UPDATE_COMMENT",
    id,
    content,
  };
};
