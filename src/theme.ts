import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#142d4c",
    },
    secondary: {
      main: "#9fd3c7",
    },
    info: {
      main: "#ececec",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
    },
  },
});
