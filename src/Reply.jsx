import replyIcon from "./images/icon-reply.svg";
const Reply = () => {
  return (
    <div
      className="
      cursor-pointer ml-auto space-x-1.5
      col-start-2 row-start-3 self-center
      sm:row-start-1"
    >
      <img className="inline-block" src={replyIcon} alt="reply_icon" />
      <span className="font-bold text-modrateBlue">Reply</span>
    </div>
  );
};

export default Reply;
