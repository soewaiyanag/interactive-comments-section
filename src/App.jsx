import { useState, useEffect } from "react";
import Comment from "./Comment";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [comments, setComments] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const data = "../data.json";
    fetch(data)
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        setCurrentUser(value.currentUser);
        setComments(value.comments);
        setIsDataLoaded(true);
      });
    return () => {};
  }, []);

  const CommentItems = isDataLoaded
    ? comments.map((comment) => {
        return (
          <Comment
            currentUser={currentUser}
            key={comment.id}
            score={comment.score}
            avatar={comment.user.image.png}
            name={comment.user.username}
            createdAt={comment.createdAt}
            replies={comment.replies}
          >
            {comment.content}
          </Comment>
        );
      })
    : null;

  return (
    <div className="p-6 bg-veryLightGray min-h-screen">{CommentItems}</div>
  );
}

export default App;
