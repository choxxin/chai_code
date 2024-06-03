import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Layout from "./Layout.jsx";
import Contact from "./Contact/contact.jsx";
import User from "./User/User.jsx";
import Github from "./Github/github.jsx";
//THER IS A CONCEPT LOADDER WHUCH HELP TO FETCH DATA BEFORE RENDERING .WATCH IF NEED
//THIS IS ONE OF SYNTAX
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "user/:userid",
        element: <User />,
      },
      {
        path: "github",
        element: <Github />,
      },
    ],
  },
]);

//ANOTHER EASY SYNTAX
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
