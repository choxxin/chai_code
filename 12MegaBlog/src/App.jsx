import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import "./index.css";
// import { OAuthProvider } from "appwrite";
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
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <div
      className="m-8 inline-block h-14 w-14 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export default App;
