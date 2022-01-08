import React, { useState } from "react";

const Plus = (props) => {
  return (
    <svg
      className="cursor-pointer  group"
      onClick={props.clickHandler}
      width="11"
      height="11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
        className={`transition-colors group-hover:fill-modrateBlue ${
          props.checked ? "fill-modrateBlue" : "fill-lightGrayishBlue"
        }`}
      />
    </svg>
  );
};

const Minus = (props) => {
  return (
    <svg
      className="cursor-pointer  group"
      onClick={props.clickHandler}
      width="11"
      height="3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
        className={`transition-colors group-hover:fill-modrateBlue ${
          props.checked ? "fill-modrateBlue" : "fill-lightGrayishBlue"
        }`}
      />
    </svg>
  );
};

const Score = (props) => {
  const [score, setScore] = useState(props.score ?? 0);
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
    setScore(score + value);
    setIsUpVoted(true);
  };

  const downVote = (value) => {
    setScore(score - value);
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
        <Plus checked={isUpVoted} clickHandler={upVoteHandler} />
        <span className="text-modrateBlue text-lg font-medium">{score}</span>
        <Minus checked={isDownVoted} clickHandler={downVoteHandler} />
      </div>
    </div>
  );
};

export default Score;
