import Comment from "./Comment";

const Reply = (props) => {
  const replies = props.replies;

  return replies.map((reply) => {
    return (
      <Comment
        key={reply.id}
        score={reply.score}
        avatar={reply.user.image.png}
        name={reply.user.username}
        createdAt={reply.createdAt}
      >
        {reply.content}
      </Comment>
    );
  });
};

export default Reply;
