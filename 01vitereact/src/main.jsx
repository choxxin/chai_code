import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    {" "}
    visit google
  </a>
);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App /> //This is just a fucntion
  // </React.StrictMode>

  // anotherElement    //This is the function also providing to react
);
