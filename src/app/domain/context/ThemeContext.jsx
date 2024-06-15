import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [primary, setPrimary] = useState("#009F79");
  const [themeColor, setThemeColor] = useState("#FFFFFF");
  const [themeHeaderColor, setThemeHeaderColor] = useState("#FFFFFF");
  const [algorithm, setAlgorithm] = useState("light");

  const switchMode = (mood) => {
    if (mood === "dark") {
      setThemeColor("#363636");
      setThemeHeaderColor("#262626");
      setAlgorithm("dark");
    } else {
      setThemeColor("#FFFFFF");
      setThemeHeaderColor("#FFFFFF");
      setAlgorithm("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        primary,
        setPrimary,
        themeColor,
        setThemeColor,
        algorithm,
        setAlgorithm,
        themeHeaderColor,
        setThemeHeaderColor,
        switchMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
