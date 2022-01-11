import React, { useContext } from "react";
import UserContext from "./CurrentUserContext";

const Status = (props) => {
  const { currentUser } = useContext(UserContext);
  const isCurrentUser = currentUser.username === props.username;

  return (
    <div
      className="
      flex flex-wrap gap-4 items-center
      col-span-2 sm:col-start-2 sm:row-start-1
    "
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
