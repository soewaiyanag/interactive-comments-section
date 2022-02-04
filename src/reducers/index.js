import createNewComment from "../createNewComment";

const initialState = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
    },
    username: "juliusomo",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
            },
            username: "ramsesmiron",
          },
          replies: [],
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
            },
            username: "juliusomo",
          },
          replies: [],
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_COMMENT":
      return {
        ...state,
        comments: [
          ...state.comments,
          createNewComment(action.user, action.content),
        ],
      };

    case "UPDATE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((cmt) => {
          // if the comment is the one being updated
          if (cmt.id === action.id) {
            return {
              ...cmt,
              content: action.content,
            };
          }
          if ("replies" in cmt) {
            return {
              ...cmt,
              // if the reply is being updated
              replies: cmt.replies.map((reply) => {
                if (reply.id === action.id) {
                  return {
                    ...reply,
                    content: action.content,
                  };
                }
                return reply;
              }),
            };
          }
          // if the comment is not being updated then return the comment
          return cmt;
        }),
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
                createNewComment(action.user, action.content),
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
                      createNewComment(action.user, action.content),
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

    default:
      return state;
  }
};

export default reducer;
