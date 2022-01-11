import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Comment from "./components/Comment";
import UserContext from "./CurrentUserContext";
import WriteComment from "./components/WriteComment";
import useStickyState from "./hook/useStickyState";
function App() {
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
      });
  }, [currentUser, comments]);

  return (
    <UserContext.Provider value={{ comments, currentUser }}>
      <div className="min-h-screen max-w-3xl mx-auto">
        {isDataLoaded
          ? comments.map((comment) => {
              return (
                <Comment
                  updateComments={setComments}
                  key={comment.id}
                  data={comment}
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
