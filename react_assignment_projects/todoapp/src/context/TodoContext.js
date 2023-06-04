import { createContext, useReducer } from "react";
import todoReducer from "./TodoReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [
      {
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
      {
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
      {
        id: 5,
        title:
          "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
      },
      {
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    if (todo) {
      dispatch({
        type: "ADD_TODO",
        payload: todo,
      });
    }
  };

  const deleteTodo = (id) => {
    if (id) {
      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    }
  };

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
