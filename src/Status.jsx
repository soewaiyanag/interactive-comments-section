import profilePicture from "./images/avatars/image-amyrobson.png";
import replyIcon from "./images/icon-reply.svg";

const Status = () => {
  return (
    <div className="grid-cols-10 flex gap-4 items-center">
      <img className="h-9" src={profilePicture} alt="profile picture" />
      <h1 className="text-lg text-darkBlue font-bold">amyrobeson</h1>
      <span className="text-grayishBlue font-normal">1 month ago</span>
      <div className="cursor-pointer ml-auto space-x-1.5">
        <img className="inline-block" src={replyIcon} alt="reply_icon" />
        <span className="font-bold text-modrateBlue">Reply</span>
      </div>
    </div>
  );
};

export default Status;
