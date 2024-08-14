// theme-context.js
//─ pages/
//├── context/
//│   ├── theme-context.js

import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // 'light' o 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// index.js o App.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./theme-context";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// ThemeToggleButton.js
import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === "light" ? "oscuro" : "claro"}
    </button>
  );
};

export default ThemeToggleButton;
