import React, { useState } from "react";
import { useEffect } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-600">
        <h1 className="bg-gray-700 flex justify-center text-white p-4 text-3xl ">
          GITHUB FOLLOWER: {data.followers}{" "}
        </h1>
        <img
          src={data.avatar_url}
          alt="GIT pic"
          width={300}
          className="flex justify-center"
        ></img>
      </div>
    </>
  );
}
