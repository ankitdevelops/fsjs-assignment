import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Task = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <div className="card w-10/12 mx-auto bg-base-100 shadow-xl my-3">
      <div className="card-body">
        <div className="card-title">
          <h2>{todo.title}</h2>
        </div>

        <div>
          <button
            className="badge badge-warning gap-2 mx-2"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
