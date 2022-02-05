import newComment from "../newComment";
import { removeFromComments, editComment } from "../function";
import initialState from "../initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_COMMENT":
      return {
        ...state,
        comments: [...state.comments, newComment(action.user, action.content)],
      };

    case "UPDATE_COMMENT":
      return {
        ...state,
        comments: editComment(state.comments, action.id, action.content),
      };

    case "SEND_REPLY":
      return {
        ...state,
        // update the comment if doesn't exist find the another comment in reply and update
        comments: state.comments.map((cmt) => {
          if (cmt.id === action.id) {
            return {
              ...cmt,
              replies: [
                ...cmt.replies,
                newComment(action.user, action.content),
              ],
            };
          }
          if ("replies" in cmt) {
            return {
              ...cmt,
              replies: cmt.replies.map((reply) => {
                if (reply.id === action.id) {
                  return {
                    ...reply,
                    replies: [
                      ...reply.replies,
                      newComment(action.user, action.content),
                    ],
                  };
                }
                return reply;
              }),
            };
          }
          return cmt;
        }),
      };

    case "DELETE_COMMENT":
      return {
        ...state,
        comments: removeFromComments(state.comments, action.id),
      };

    default:
      return state;
  }
};

export default reducer;
