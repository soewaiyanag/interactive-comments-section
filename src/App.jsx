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

  return (
    <div className="min-h-screen max-w-3xl mx-auto">
      {isDataLoaded
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
        : null}
    </div>
  );
}

export default App;
