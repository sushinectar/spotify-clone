import React, { createContext, useContext, useState } from "react";

// Context creation
const ThemeContext = createContext();

// Hook to access context
export const useTheme = () => useContext(ThemeContext);

// Theme provider to encapsulate the application
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
