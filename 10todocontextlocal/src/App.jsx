import { useState } from "react";

import "./App.css";
import { Todoprovider } from "./contexts";
import { useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/Todoitem";
function App() {
  //Array of todo
  const [todo, setTodo] = useState([]);
  //WORKING-
  //Takes the id as datenow which include seconds also
  //spreading todo which cointains the todo task as weel as conmplete or not
  //then spreding all previous value
  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  //WORKING-

  //Takes id and apply a loop and compare everid of prev value
  //if martched then apply new to do else remain prevtodo
  const updateTodo = (id, todo) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  //WORKING:-

  //filter function  allow thos whose condition come true\

  //Takes prev value and whose id is not matched allow them if matched that is the one to delete

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

  //WORKING-\
  // Match up the id by looping if matched ,keep all vgalue same by spreadfing its prevvalue just
  // overwrite the spread value completed with the opposite of prev completed

  const toggleComplete = (id) => {
    setTodo((prev) => {
      return prev.map((prevTodo) => {
        return prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo;
      });
    });
  };

  //LOCALSTORAGE

  //(JSON.PARSE:- Convert json into obj)
  //(JSON.stringify:- convert obj to json )

  //THis useffect will run only once while reolding and get the item from local storage
  //and pass its value to todo
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"));

    if (todo && todo.length > 0) {
      setTodo(todo);
    }
  }, []);

  //This useeffct will rubneverytime  todo value is changed and pass the
  //availble item to locla storage by converting it into json format
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
