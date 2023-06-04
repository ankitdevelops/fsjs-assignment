import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const Header = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="w-10/12 mx-auto prose">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Welcome back
      </h1>
      <p
        className=" text-lg sm:text-2xl my-3 font-light opacity-75
      "
      >
        You'he got {todos.length} remaining tasks.
      </p>
    </div>
  );
};

export default Header;
