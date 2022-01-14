import React from "react";

const DeleteModel = (props) => {
  return (
    <section
      className="fixed inset-0 h-full bg-black bg-opacity-10
                         grid place-items-center animate-fade-in-up"
    >
      <div
        className="bg-white py-6 rounded-lg space-y-4
                    w-96 p-6"
      >
        <h1 className="text-darkBlue text-xl font-medium">Delete Comment</h1>
        <p className="text-darkBlue">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone
        </p>
        <div className="flex text-center gap-4">
          <button
            className="
                px-5 py-2 rounded-md active:opacity-80 w-1/2
                uppercase bg-grayishBlue text-white font-medium"
            onClick={props.cancelHandler}
          >
            no, cancel
          </button>
          <button
            className="
                px-5 py-2 rounded-md active:opacity-80 w-1/2
                uppercase bg-softRed text-white font-medium"
            onClick={props.deleteHandler}
          >
            yes, delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteModel;
