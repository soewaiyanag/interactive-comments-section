const Status = (props) => {
  return (
    <div
      className="
      flex flex-wrap gap-4 items-center
      col-span-2 sm:col-start-2 sm:row-start-1
    "
    >
      <img className="h-8" src={props.avatar} alt="profile picture" />
      <h1 className="text-lg text-darkBlue font-semibold">{props.name}</h1>
      <span className="text-grayishBlue font-normal text-base">
        {props.createdAt}
      </span>
    </div>
  );
};

export default Status;
