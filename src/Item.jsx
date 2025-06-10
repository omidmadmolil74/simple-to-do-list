import React from "react";
import { TaskContexts } from "./TaskContext";
const Item = () => {
  const [task, setTask] = React.useState("");
  const { taskItems, setTaskItems } = React.useContext(TaskContexts);
  const id = React.useId();
  const taskId = `${id}-task`;
  return (
    <div className="space-y-10 flex justify-center items-center flex-col">
      <h1 className="text-white text-6xl">To Do List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTaskItems([
            ...taskItems,
            { id: taskId, title: task, done: false },
          ]);
          setTask("");
        }}
      >
        <div className="flex items-center gap-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className="border-amber-300 border-2 text-2xl text-white w-150 py-3"
          />
          <button
            type="submit"
            className="text-2xl text-white bg-blue-800 py-3 px-5 rounded-xl"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Item;
