import profilePicture from "./images/avatars/image-amyrobson.png";

const Status = () => {
  return (
    <div
      className="
      flex flex-wrap gap-4 items-center
      col-span-2 sm:col-start-2 sm:row-start-1
    "
    >
      <img className="h-8" src={profilePicture} alt="profile picture" />
      <h1 className="text-lg text-darkBlue font-bold">amyrobeson</h1>
      <span className="text-grayishBlue font-normal text-base">
        1 month ago
      </span>
    </div>
  );
};

export default Status;
