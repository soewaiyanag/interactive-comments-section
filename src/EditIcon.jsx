import editIcon from "./images/icon-edit.svg";

const EditIcon = (props) => {
  return (
    <div
      onClick={props.clickHandler}
      className="
      flex items-center
      space-x-1.5
      select-none active:opacity-75
      transition-opacity"
    >
      <img className="inline-block h-fit" src={editIcon} alt="reply_icon" />
      <span className="font-bold text-modrateBlue">Edit</span>
    </div>
  );
};

export default EditIcon;
