import { createContext, useContext } from "react";

//In this file we define what we neeed

export const TodoContext = createContext({
  todo: [{ id: 1, todo: "todomssg", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  //Get the direct accces
  return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider; //This is the provider
