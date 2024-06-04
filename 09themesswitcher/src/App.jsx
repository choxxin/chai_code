import { ThemeProvider } from "./contexts/theme";
import "./App.css";
import { useState, useEffect } from "react";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    //we can derive the function comimng out of the themeprovi8der
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark"); //this remove the terms darka or light
    document.querySelector("html").classList.add(themeMode); //by the help of this we cam add what value we got in thememode
  }, [themeMode]);
  return (
    <>
      {/* Any component nested within a context provider can consume the shared data.  */}
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Themebtn */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
