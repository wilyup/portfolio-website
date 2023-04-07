import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.scss";
import Root from "./app/components/Core/Root/Root";
import { darkTheme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
