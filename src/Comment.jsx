import React, { useState } from "react";
import plus from "./images/icon-plus.svg";
import minus from "./images/icon-minus.svg";

const ScoreIcon = ({ src, clickHandler }) => {
  return (
    <img
      className="w-4 cursor-pointer"
      src={src}
      alt="icon"
      onClick={clickHandler}
    />
  );
};

const Score = (props) => {
  const [score, setScore] = useState(0);
  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);

  const removeUpVote = () => {
    setScore(score - 1);
    setIsUpVoted(false);
  };

  const removeDownVote = () => {
    setScore(score + 1);
    setIsDownVoted(false);
  };

  const upVote = (value) => {
    setScore(score + Number(value));
    setIsUpVoted(true);
  };

  const downVote = (value) => {
    setScore(score - Number(value));
    setIsDownVoted(true);
  };

  const upVoteHandler = () => {
    if (isUpVoted) {
      removeUpVote();
      return;
    }
    if (isDownVoted) {
      removeDownVote();
      upVote(2);
      return;
    }
    upVote(1);
  };

  const downVoteHandler = () => {
    if (isDownVoted) {
      removeDownVote();
      return;
    }
    if (isUpVoted) {
      removeUpVote();
      downVote(2);
      return;
    }
    downVote(1);
  };

  return (
    <div className="text-white text-3xl">
      <div
        className="
        flex flex-col items-center gap-2
        max-w-[2.5rem] bg-gray-100
        py-4 rounded-md select-none"
      >
        <ScoreIcon src={plus} clickHandler={upVoteHandler} />
        <span className="text-modrateBlue text-lg font-medium">{score}</span>
        <ScoreIcon src={minus} clickHandler={downVoteHandler} />
      </div>
      <h1>isUpVoted: {isUpVoted ? "Yes" : "No"}</h1>
      <h1>isDownVoted: {isDownVoted ? "Yes" : "No"}</h1>
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
