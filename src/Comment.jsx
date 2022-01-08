import Score from "./Score";
import Status from "./Status";

const Comment = () => {
  return (
    <section
      className="p-4 bg-white rounded-md
      gap-4 grid grid-cols-[auto_1fr]"
    >
      <Score score={10} />
      <Status />
    </section>
  );
};

export default Comment;
