import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [color, SetColor] = useState("Olive");

  return (
    <div
      // This help to set full width full height screen tailwind css propert
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
      //   syntax for the inline css in js

      //padding x px , rounded 3xl ,shadow large
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => SetColor("Red")} //to pass the argument you need to use an arrow function u cant directly
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => SetColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => SetColor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => SetColor("Pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => SetColor("Cyan")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Cyan" }}
          >
            Cyan
          </button>
          <button
            onClick={() => SetColor("Magenta")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Magenta" }}
          >
            Magenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
