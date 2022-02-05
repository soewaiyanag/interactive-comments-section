import React from "react";
import store from "../store";

const Status = (props) => {
  const { currentUser } = store.getState();
  const isCurrentUser = currentUser.username === props.username;

  return (
    <div
      className="
      flex flex-wrap gap-4 items-center
      col-span-2 md:col-start-2 md:row-start-1
    "
      role="status"
    >
      <img className="h-8" src={props.avatar} alt="profile picture" />
      <h1
        className="text-[1.05rem] text-darkBlue font-semibold
                    flex items-center gap-2"
      >
        {props.username}
        <span
          style={{
            display: isCurrentUser ? null : "none",
          }}
          className="bg-modrateBlue text-white
                   text-xs text-center px-2"
        >
          you
        </span>
      </h1>

      <span className="text-grayishBlue font-normal text-base">
        {props.createdAt}
      </span>
    </div>
  );
};

export default Status;
