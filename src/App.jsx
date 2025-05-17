import Todoform from "./Components/Todoform";
import Todo from "./Components/Todo";
import { useState } from "react";

function App() {
  const [todo, settodo] = useState([
    { id: 1, title: "Learn react", completed: false },
  ]);
  function TodoAdd(data) {
    settodo((pre) => [...pre, data]);
  }
  function RemoveTodo(id) {
    settodo((pre) => pre.filter((data) => data.id != id));
  }
  function Toggle(id) {
    settodo((pre) =>
      pre.map((data) => {
        if (data.id === id) {
          return { ...data, completed: !data.completed };
        } else {
          return data;
        }
      })
    );
  }
  return (
    <div className="flex flex-col md:flex-row md:justify-between p-5 gap-10">
      <Todoform TodoAdd={TodoAdd} />
      <Todo todo={todo} RemoveTodo={RemoveTodo} Toggle={Toggle} />
    </div>
  );
}

export default App;
