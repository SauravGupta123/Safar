import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./components/Header/Theme.js";

ReactDOM.render(
  
    <ThemeProvider theme={theme}>
    <App />

    </ThemeProvider>,
  
  document.getElementById('root')
);


