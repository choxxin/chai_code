import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {}, //we can provide function as passing data in react
  lightTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider; //U can directly transfer the provider function from her e

//WE USE this custom hooks bcz we write usercontex .usecontext always we dont need this we can do directly like this

export default function useTheme() {
  return useContext(ThemeContext);
}
