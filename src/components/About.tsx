import { SpotifyNowPlaying } from "./";
import { Typography, Stack } from "@mui/material";

export default function About() {
  return (
    <Stack spacing={1} color="info.main">
      <Typography fontSize={[16, 18]}>
        I'm a curious being, who loves challenges, people and music...
      </Typography>
      <SpotifyNowPlaying />
    </Stack>
  );
}
