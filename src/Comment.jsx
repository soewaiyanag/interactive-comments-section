import Score from "./Score";
import Status from "./Status";

const Comment = (props) => {
  return (
    <section
      className="
      p-4 bg-white rounded-md
      gap-4 grid grid-cols-[auto_1fr]"
    >
      <Score score={12} />
      <Status />
      <p className="sm:col-span-2 sm:col-start-2">{props.children}</p>
    </section>
  );
};

export default Comment;
