import Reply from "./Reply";
import Score from "./Score";
import Status from "./Status";

const Comment = (props) => {
  return (
    <section
      className="
      p-4 bg-white rounded-md
      gap-6 grid grid-cols-2 grid-rows-[repeat(3,auto)]
      sm:grid-cols-[auto_1fr]"
    >
      <Score score={12} />
      <Status />
      <Reply />
      <p
        className="
      text-grayishBlue text-base font-normal
      col-span-2 sm:col-span-2 sm:col-start-2"
      >
        {props.children}
      </p>
    </section>
  );
};

export default Comment;
