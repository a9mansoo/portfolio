import { createTheme } from "@mui/material";

export const appTheme = (mode) =>
  mode === "light"
    ? createTheme({
        palette: {
          mode: "light",
          primary: {
            main: "#593b24",
          },
          secondary: {
            main: "#a3a869",
          },
          error: {
            main: "#d18934",
          },
          warning: {
            main: "#d3b090",
          },
          success: {
            main: "#93ad76",
          },
          info: {
            main: "#936e4e",
          },
        },
        typography: {
          fontFamily: "monospace",
        },
      })
    : createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#936e4e",
          },
          secondary: {
            main: "#a3a869",
          },
          error: {
            main: "#865113",
          },
          warning: {
            main: "#724444",
          },
          success: {
            main: "#93ad76",
          },
          info: {
            main: "#0b2f5a",
          },
          text: {
            primary: "#ede0d4",
          },
          background: {
            paper: "#121212",
            default: "#121212"
          }
        },
          typography: {
            fontFamily: "monospace",
          },
});