import replyIcon from "../images/icon-reply.svg";

const ReplyIcon = (props) => {
  return (
    <div
      onClick={props.clickHandler}
      className="
      flex items-center
      space-x-1.5
      select-none active:opacity-75
      transition-opacity"
    >
      <img className="inline-block h-fit" src={replyIcon} alt="reply_icon" />
      <span className="font-bold text-modrateBlue">Reply</span>
    </div>
  );
};

export default ReplyIcon;
