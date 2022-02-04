export const sendComment = (user, content) => {
  return {
    type: "SEND_COMMENT",
    user,
    content,
  };
};
