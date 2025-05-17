import React from "react";

function Todo({ todo, RemoveTodo, Toggle }) {
  return (
    <div id="todo" className="md:w-[30%] overflow-y-scroll h-[650px]">
      <h1 className="text-4xl font-light text-red-300 mb-5">Pending todos</h1>
      {todo.map((data) => {
        return (
          <div
            key={data.id}
            className="flex items-center py-3 px-3 rounded-md justify-between bg-gray-800 mb-5"
          >
            <p>
              <input
                type="checkbox"
                checked={data.completed}
                onChange={() => Toggle(data.id)}
                className="accent-green-600"
              />
              <span className={`${data.completed ? "complete" : ""} ml-3`}>
                {data.title}
              </span>
            </p>

            <button
              className="cursor-pointer text-red-500"
              onClick={() => RemoveTodo(data.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
