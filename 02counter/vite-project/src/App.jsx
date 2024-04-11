import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(15);

  function increaseValue() {
    // count=count+1;
    console.log(count);
    setCount(count + 1);
  }
  function decreaseValue() {
    console.log(count);
    setCount(count - 1);
  }

  return (
    <>
      <h1>Ansh aur react</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <p>
        This is the usestate use in react which is hooks used to change UI with
        js
      </p>
    </>
  );
}

export default App;
