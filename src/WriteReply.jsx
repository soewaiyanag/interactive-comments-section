import React from "react";

const WriteReply = (props) => {
  return (
    <div
      className="grid grid-cols-[auto_1fr_auto] gap-4
                    bg-white shadow-sm -mt-2 p-4"
    >
      <img className="h-10" src={props.avatar} alt="avator" />
      <textarea
        className="rounded px-5 py-2 min-h-[5rem]
                    resize-none text-base border-2"
        type="text"
        name="write_reply"
        id="write_reply"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <button
        className="py-2 px-5 bg-modrateBlue 
                text-white h-fit rounded 
                active:bg-opacity-75"
      >
        Reply
      </button>
    </div>
  );
};

export default WriteReply;
