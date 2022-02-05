import Comment from "./components/Comment";
import WriteComment from "./components/WriteComment";
import store from "./store";

const App = () => {
  const { comments } = store.getState();

  return (
    <div className="min-h-screen max-w-[44rem] my-10 mx-auto">
      {comments.map((comment) => {
        return (
          <Comment key={comment.id} comment={comment}>
            {comment.content}
          </Comment>
        );
      })}
      <div className="my-6">
        <WriteComment btnValue="SEND" />
      </div>
    </div>
  );
};

export default App;
