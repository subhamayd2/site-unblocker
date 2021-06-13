import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeSwitcherProvider } from "mui-theme-switcher";
import { darkTheme, lightTheme } from "./theme";

ReactDOM.render(
  <ThemeSwitcherProvider
    lightTheme={lightTheme}
    darkTheme={darkTheme}
    persist
    appId="unblocker"
    smoothTransition={false}
  >
    <App />
  </ThemeSwitcherProvider>,
  document.getElementById("root")
);
