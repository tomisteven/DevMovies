import React, { createContext, useEffect } from "react";
import { useReducer } from "react";
import themeReducer from "./themeReducer";

const ThemeContext = createContext();

const initialThemeState = {
  theme: "light", // defecto
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  // cargamos al iniciar la app
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch({ type: "SET_THEME", payload: savedTheme });
    }
  }, []);

  // aplico en local
  useEffect(() => {
    //especifico el atributo data-theme en el elemento root para aplicar el tema
    //ver delay
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
