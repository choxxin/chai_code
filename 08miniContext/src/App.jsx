import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Componenets/Login";
import Profile from "./Componenets/Profile";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>MEOWWW</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
