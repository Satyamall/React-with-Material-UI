import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import red from "@mui/material/colors/red";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: red
  }
});

const darkTheme = createTheme({
  palette: {
    primary: red,
    secondary: blue
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
