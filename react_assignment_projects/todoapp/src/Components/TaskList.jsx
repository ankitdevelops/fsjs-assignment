import React from "react";
import Task from "./Task";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";
const TaskList = () => {
  const { todos } = useContext(TodoContext);
  if (todos.length === 0) {
    return (
      <p className=" text-lg sm:text-2xl  font-light opacity-75 text-center">
        Add Some Todo's and Organize Your Day
      </p>
    );
  }
  return (
    <>
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TaskList;
