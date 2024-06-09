import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { OAuthProvider } from "appwrite";
function App() {
  //console.log(process.env.REACT_APP_APPWRITE_URL);
  //WE ARE using vite not react we will not use this

  //console.log(import.meta.env.VITE_APPWRITE_URL);//To get the acess of the env variable

  //LOADING STATE IF IT TAKES TIME
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    //Get current user
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout()); // if user data is null then make dispatch logout call automaticlly
        }
      })
      .finally(() => setLoading(false)); //If everything become successful then
  }, []);

  return !Loading ? (
    <>
      {" "}
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            TODO: <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <div>LOADING</div>
  );
}

export default App;
