import { Typography, Container, Stack, IconButton } from "@mui/material";
import MT from "../assets/mt.png";

export default function Footer() {
  return (
    <Container component="footer" maxWidth="md" sx={{ padding: 3 }}>
      <Stack alignItems="center" spacing={1}>
        Built with Vite, React, Typescript and Material UI, deployed to Pages.
        <IconButton
          component="a"
          color="secondary"
          sx={{ img: { maxWidth: 50 } }}
          href="#"
          rel="noopener noreferrer"
        >
          <img src={MT} alt="Maria Torrente" />
        </IconButton>
        <Typography variant="caption"> Maria Torrente 2024</Typography>
      </Stack>
    </Container>
  );
}
