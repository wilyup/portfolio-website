import { createTheme, ThemeOptions } from "@mui/material/styles";

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3d6dc2",
    },
    secondary: {
      main: "#c23d6c",
    },
    info: {
      main: "#943dc2",
    },
  },
  typography: {
    fontFamily: "Baloo",
  },
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#3d6dc2",
    },
    secondary: {
      main: "#c23d6c",
    },
    info: {
      main: "#943dc2",
    },
  },
  typography: {
    fontFamily: "Baloo",
  },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
