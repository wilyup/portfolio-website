import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.scss";
import Root from "./components/Core/Root/Root";
import { darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
