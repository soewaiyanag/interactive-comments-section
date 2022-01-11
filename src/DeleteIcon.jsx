import deleteIcon from "./images/icon-delete.svg";

const DeleteIcon = (props) => {
  return (
    <div
      onClick={props.clickHandler}
      className="
      flex items-center
      space-x-1.5
      select-none active:opacity-75
      transition-opacity"
    >
      <img className="inline-block h-fit" src={deleteIcon} alt="reply_icon" />
      <span className="font-bold text-softRed">Delete</span>
    </div>
  );
};

export default DeleteIcon;
