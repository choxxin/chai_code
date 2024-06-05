import { useState } from "react";

import "./App.css";
import { Todoprovider } from "./contexts";
import { useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/Todoitem";
function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  //THIS IS WITOUT RETURN STAE<ENT REQUIRE NO CURLY BRA
  // const toggleComplete = (id) =>
  //   setTodo((prev) =>
  //     prev.map((prevTodo) =>
  //       prevTodo.id === id
  //         ? { ...prevTodo, completed: !prevTodo.completed }
  //         : prevTodo
  //     )
  //   );

  const toggleComplete = (id) => {
    setTodo((prev) => {
      return prev.map((prevTodo) => {
        return prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo;
      });
    });
  };
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"));

    if (todo && todo.length > 0) {
      setTodo(todo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    //We always need to writye the avialble values in the toprovider
    <Todoprovider
      value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {/* //App js ui  */}

      <div className="bg-[#000000] h-screen w-screen  mr-4">
        <div className=" bg-black w-full max-w-6xl mx-auto shadow-md rounded-lg px-9  ml-8 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
