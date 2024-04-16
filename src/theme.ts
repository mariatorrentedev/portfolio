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
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    h1: {
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: "100vh",
          backgroundColor: "#142d4c",
          textAlign: "left",
          color: "#ececec",
        },
      },
    },
  },
});
