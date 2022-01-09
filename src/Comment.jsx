import ReplyIcon from "./ReplyIcon";
import Score from "./Score";
import Status from "./Status";
import Reply from "./Reply";

const Comment = (props) => {
  return (
    <div>
      <section
        className="
      p-4 my-4 bg-white rounded-md shadow-sm
      gap-6 grid grid-cols-2 
      sm:grid-cols-[auto_1fr_auto]"
      >
        <Score score={props.score} />
        <Status
          avatar={props.avatar}
          name={props.name}
          createdAt={props.createdAt}
        />
        <ReplyIcon />
        <p
          className="
      text-grayishBlue text-base font-normal
      col-span-2 sm:col-span-2 sm:col-start-2
      sm:row-span-2"
        >
          {props.children}
        </p>
      </section>
      <section className="ml-10">
        {props.replies ? <Reply replies={props.replies} /> : null}
      </section>
    </div>
  );
};

export default Comment;
