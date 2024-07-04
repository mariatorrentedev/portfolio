import * as React from "react";
import { Typography, Container, Stack, IconButton } from "@mui/material";
import { ThemeContext } from "../../mui/theme-context";
import { CloudinaryImage } from "../../components";

export default function Footer() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Container component="footer" maxWidth="md" sx={{ padding: 2 }}>
      <Stack alignItems="center" spacing={1}>
        <IconButton component="a" sx={{ img: { maxWidth: 50 } }} href="#">
          <CloudinaryImage
            publicId={theme.palette.mode === "dark" ? "mt-dark" : "mt-light"}
            alt="Maria Torrente"
          />
        </IconButton>
        <Typography color="secondary.main">
          Made with ♡ by Maria Torrente © 2024
        </Typography>
      </Stack>
    </Container>
  );
}
