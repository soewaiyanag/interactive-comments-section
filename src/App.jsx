import { useState, useEffect } from "react";
import Comment from "./Comment";

function App() {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  useEffect(() => {
    const data = "../data.json";
    fetch(data)
      .then((response) => response.json())
      .then((value) => {
        console.log(value);
        setUser(value.currentUser);
        setComments(value.comments);
        setIsDataLoaded(true);
      });
    return () => {};
  }, []);
  return (
    <div className="p-6 space-y-4 bg-veryLightGray min-h-screen">
      {isDataLoaded
        ? comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                score={comment.score}
                avatar={comment.user.image.png}
                name={comment.user.username}
                createdAt={comment.createdAt}
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
