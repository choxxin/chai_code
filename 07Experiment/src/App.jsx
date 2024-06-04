import React from "react";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState("choxxin");
  const [github, setGithub] = useState([]);

  const UserShower = () => {
    call();
    console.log(data);
  };

  function call() {
    fetch("https://api.github.com/users/" + data)
      .then((response) => response.json())
      .then((github) => {
        setGithub(github);
        console.log(github);
      });
  }

  const changehandler = (event) => {
    setData(event.target.value);
  };
  return (
    <>
      <div>
        <input
          value={data}
          className="p-4 m-7"
          onChange={changehandler}
        ></input>
        <button onClick={UserShower}>Find User</button>
      </div>

      <div>
        <h1 className="bg-gray-700 flex justify-center text-white p-4 text-3xl ">
          GITHUB FOLLOWER: {github.followers}
        </h1>
        <h1 className="bg-gray-700 flex justify-center text-white p-4 text-3xl ">
          GITHUB FOLLOWING: {github.following}
        </h1>
        <h4>Name: {github.name}</h4>
        <h4>Loc: {github.location}</h4>
        <h4>Repo: {github.public_repos}</h4>
        <h4>CreateAt: {github.created_at}</h4>
        <img src={github.avatar_url}></img>
      </div>
    </>
  );
}

export default App;
