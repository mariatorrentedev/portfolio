import "./App.css";
import { Typography } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" color="secondary">
        Maria Torrente
      </Typography>
      <Typography variant="h4" color="info">
        Software Engineer
      </Typography>
    </ThemeProvider>
  );
}
