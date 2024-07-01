import * as React from "react";
import { Typography, Container, Stack, IconButton } from "@mui/material";
import MTLogoDark from "../../assets/mt-dark.png";
import MTLogoLight from "../../assets/mt-light.png";
import { ThemeContext } from "../../mui/theme-context";

export default function Footer() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Container component="footer" maxWidth="md" sx={{ padding: 2 }}>
      <Stack alignItems="center" spacing={1}>
        <IconButton component="a" sx={{ img: { maxWidth: 50 } }} href="#">
          <img
            src={theme.palette.mode === "dark" ? MTLogoDark : MTLogoLight}
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
