// import { useState } from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// 1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function
// 2.useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
// 3.use ref : used to give reference of selected components in our page so that functions can be performed on referenced values

function App() {
  //Usestate is a hook which  need to be updated and rerendered and called by function many times
  const [length, setLength] = useState(8); //8 is the default value
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState(""); //not imp

  //use ref hook(to copy text we will use it)
  const passwordRef = useRef(null);

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99); //select a range
    window.navigator.clipboard.writetext(Password);
  }, [Password]);

  //USe call back react documntation (usecallback(function,dependency))
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*+=-[]~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass); //TO update state always.
  }, [length, numberAllowed, charAllowed]); //We write here makes its optimized ,it keeps it in cache

  useEffect(() => {
    //UPPER AND LOWER ARRAY HAS DIFFERNT SIGNIFICANCE
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  //The function is re running when any one of it is disturbed
  return (
    <>
      {/* <h1 className="text-4xl text-center text-white">Password Generator</h1>
       */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-4 my-9 bg-gray-800 text-orange-500 text-center">
        <h1 className="py-3 hover:text-orange-600">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password} //no we are using its value
            className="'outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef} //use refernce hook to connect with buutton
            readOnly
          ></input>
          <button
            className="px-4 py-0.5 bg-blue-700 text-amber-50 hover:bg-blue-800 "
            onClick={copypassword}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            min={3}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label>Length : {length}</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev); //Just reverse the parameter while clicking on checkbox
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="CharInput"
              onChange={() => {
                setCharAllowed((prev) => !prev); //Just reverse the parameter while clicking on checkbox
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
