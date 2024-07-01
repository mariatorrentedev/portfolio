import type { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const baseTheme: Theme = createTheme({
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
          textAlign: "left",
        },
        ":root": {
          ".MuiSvgIcon-root": {
            height: "4rem",
            width: "4rem",
            "@media (max-width:600px)": {
              height: "2rem",
              width: "2rem",
            },
          },
          ".MuiIcon-root": {
            height: "2rem",
            width: "1.5rem",
            "@media (max-width:600px)": {
              width: "1rem",
            },
            img: {
              width: "100%",
            },
          },
        },
      },
    },
  },
});
