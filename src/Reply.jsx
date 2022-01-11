import Comment from "./Comment";

const Reply = (props) => {
  const replies = props.replies;

  return replies.map((reply) => {
    return (
      <Comment id={reply.id} key={reply.id} data={reply}>
        {reply.content}
      </Comment>
    );
  });
};

export default Reply;
