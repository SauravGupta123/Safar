import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./components/Header/Theme.js";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
