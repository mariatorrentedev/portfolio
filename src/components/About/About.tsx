import { ABOUT_ME_TEXT } from "../utils";
import { SpotifyNowPlaying } from "../";
import { Typography, Stack } from "@mui/material";

export default function About() {
  return (
    <Stack spacing={1} color="info.main">
      <Typography data-testid="about" fontSize={[16, 18]}>
        {ABOUT_ME_TEXT}
      </Typography>
      <SpotifyNowPlaying />
    </Stack>
  );
}
