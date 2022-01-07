import React, { useState } from "react";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";

const ScoreIcon = ({ src, handler }) => {
  return (
    <img
      className="w-4 select-none cursor-pointer"
      src={src}
      alt="icon"
      onClick={handler}
    />
  );
};

const Score = (props) => {
  const [score, setScore] = useState(0);
  return (
    <div
      className="
        flex flex-col items-center gap-2
        max-w-[2.5rem] bg-gray-100
        py-3 rounded-md text-modrateBlue text-lg font-bold"
    >
      <ScoreIcon
        src={plus}
        handler={() => {
          setScore(score + 1);
        }}
      />
      {score}
      <ScoreIcon
        src={minus}
        handler={() => {
          setScore(score - 1);
        }}
      />
    </div>
  );
};

const Comment = () => {
  return (
    <section>
      <Score />
    </section>
  );
};

export default Comment;
