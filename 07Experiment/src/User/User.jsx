import React from "react";
import { useState, useEffect } from "react";
export default function User() {
  const [data, setData] = useState("choxxin");
  const [github, setGithub] = useState([]);

  const UserShower = () => {
    console.log(data);
  };

  // useEffect(() => {
  //   fetch("https://api.github.com/users/" + data)
  //     .then((response) => response.json())
  //     .then((github) => {
  //       console.log(data);
  //       setGithub(github);
  //     });
  // }, []);

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
        <button onClick={UserShower}>Fnd User</button>
      </div>
    </>
  );
}
