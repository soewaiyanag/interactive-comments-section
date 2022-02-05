import newComment from "../newComment";
import { removeFromComments, editComment, sendReply } from "../function";
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
        comments: sendReply(
          state.comments,
          action.id,
          action.user,
          action.content
        ),
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
