import { createTheme } from "@mui/material";


export const appTheme = (mode) => createTheme({
  palette: {
    mode: mode,
    primary: {
      main: '#e8e8f7ff',
      light: '#4a4e69',
      dark: '#9a8c98',
      contrastText: '#c9ada7',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

