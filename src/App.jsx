import { useState, useEffect } from "react";
import Comment from "./Comment";
import UserContext from "./CurrentUserContext";
import WriteComment from "./WriteComment";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [comments, setComments] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const dataURL = "../data.json";
    fetch(dataURL)
      .then((response) => response.json())
      .then((value) => {
        let dataObj = JSON.parse(localStorage.getItem("data"));

        if (dataObj === null) {
          dataObj = value;
          localStorage.setItem("data", JSON.stringify(value));
        }

        setCurrentUser(dataObj.currentUser);
        setComments(dataObj.comments);
        setIsDataLoaded(true);
      });
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      <div className="min-h-screen max-w-3xl mx-auto">
        {isDataLoaded
          ? comments.map((comment) => {
              return (
                <Comment
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
        <div className="my-6">
          {isDataLoaded ? <WriteComment btnValue="SEND" /> : null}
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
