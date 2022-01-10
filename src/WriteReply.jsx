import React, { useContext } from "react";
import UserContext from "./CurrentUserContext";

const WriteReply = (props) => {
  const currentUser = useContext(UserContext);
  return (
    <div
      className="my-4 grid gap-4 grid-cols-2
                bg-white shadow-sm -mt-2 p-4
                sm:grid-cols-[auto_1fr_auto]"
    >
      <img className="h-10" src={currentUser.image.png} alt="avator" />
      <textarea
        className="rounded px-5 py-2 min-h-[5rem]
                    resize-none text-base border-2
                    col-span-2 row-start-1
                    sm:col-span-1 sm:col-start-2 sm:row-start-1"
        type="text"
        name="write_reply"
        id="write_reply"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <button
        className="py-2 px-5 bg-modrateBlue 
                text-white h-fit rounded 
                active:bg-opacity-75"
      >
        Reply
      </button>
    </div>
  );
};

export default WriteReply;
