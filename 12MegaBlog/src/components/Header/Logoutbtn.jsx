import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function Logoutbtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .Logout("current")
      .then(() => {
        dispatch(logout()); //This is giving a promise as we want our logout in frontend to be changed only and only if the backend apprives and thats why we used the then here
      })
      .catch((error) => {
        console.log("The error in logout :", error); //ADDED BY ME
      });
  };

  ///ONCLICK LEFT
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default Logoutbtn;
