import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const InputForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    const data = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    addTodo(data);
    setTodo("");
  };
  return (
    <div className="w-10/12 mx-auto">
      <input
        type="text"
        placeholder="What's your next task"
        className="input w-full max-w-xs input-bordered"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn ms-3" onClick={handleAddTodo}>
        Add Now
      </button>
    </div>
  );
};

export default InputForm;
