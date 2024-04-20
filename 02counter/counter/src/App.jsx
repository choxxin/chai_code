import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(15);

  //in vedio 8
  // const adddvalue =() =>{
  //   setCount(count+1)
  //   setCount(count+1)    //its add value once only not 4 times,becouse react send function as once
  //   setCount(count+1)    //to actually implemnt it write setCount(count => count+1);
  //   setCount(count+1)
  // }

  const increaseValue = () => {
    // count=count+1;
    console.log(count);
    setCount(count + 1);
  };
  const decreaseValue = () => {
    console.log(count);
    setCount(count - 1);
  };
  return (
    <>
      <h1>Ansh aur react</h1>
      <h3>Counter value: {count}</h3>

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
