import React, { useState } from "react";

function Todoform({ TodoAdd }) {
  const [title, settitle] = useState("");
  function HandleSubmit(e) {
    e.preventDefault();
    console.log(title);
    if (title.trim().length !== 0) {
      const Obj = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      };
      TodoAdd(Obj);
    } else {
      alert("please enter something");
      return;
    }
    settitle("");
  }
  return (
    <div className="md:w-[70%]">
      <h1 className="text-red-300 text-4xl mb-6 md:text-6xl font-light">
        Todo List
      </h1>
      <form onSubmit={HandleSubmit} className="w-full">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className="border-b-1 py-2.5 px-2 mb-6 outline-0 w-full"
        />
        <button
          type="submit"
          className="border-1 py-2.5 px-10 rounded-md text-sm cursor-pointer"
        >
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default Todoform;
