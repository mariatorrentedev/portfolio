import { Typography, Container, Stack, IconButton } from "@mui/material";
import MTLogo from "../../assets/mt.png";

export default function Footer() {
  return (
    <Container component="footer" maxWidth="md" sx={{ padding: 2 }}>
      <Stack alignItems="center" spacing={1}>
        <IconButton
          component="a"
          color="secondary"
          sx={{ img: { maxWidth: 50 } }}
          href="#"
        >
          <img src={MTLogo} alt="Maria Torrente" />
        </IconButton>
        <Typography variant="caption"> © Maria Torrente 2024</Typography>
      </Stack>
    </Container>
  );
}
