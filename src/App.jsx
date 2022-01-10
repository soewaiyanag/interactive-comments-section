import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Comment from "./Comment";
import UserContext from "./CurrentUserContext";
import WriteComment from "./WriteComment";
import useStickyState from "./hook/useStickyState";
function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  const [currentUser, setCurrentUser] = useStickyState(null, "currentUser");
  const [comments, setComments] = useStickyState(null, "comments");
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const dataURL = "../data.json";
    fetch(dataURL)
      .then((response) => response.json())
      .then((value) => {
        const currentUserData = JSON.parse(localStorage.getItem("currentUser"));
        const commentsData = JSON.parse(localStorage.getItem("comments"));

        if (currentUserData === null || commentsData === null) {
          setCurrentUser(value.currentUser);
          setComments(value.comments);
        }
        setIsDataLoaded(true);
        console.log(comments);
        console.log(uniqid());
      });
  }, [currentUser, comments]);

  return (
    <UserContext.Provider value={currentUser}>
      <div className="min-h-screen max-w-3xl mx-auto">
        {isDataLoaded
          ? comments.map((comment) => {
              return (
                <Comment
                  id={comments.id}
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
