import React from "react";
import { useSelector } from "react-redux";

function Logo({ width = "100px" }) {
  const userData = useSelector((state) => state.auth.userData);

  if (userData == null) {
    return (
      <div>
        <h1>NO USER</h1>
      </div>
    );
  }
  return (
    <div>
      <h1> Welcome {userData.name}</h1>
    </div>
  );
}

export default Logo;
