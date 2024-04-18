import { SpotifyNowPlaying } from "./";
import { Typography, Stack } from "@mui/material";

export default function About() {
  return (
    <Stack spacing={1} color="info.main">
      <Typography fontSize={[16, 18]}>
        In the solo dance of technology and music, I find my rhythm, weaving
        code and melodies into seamless experiences that strike a chord with
        users. With a passion for innovation and a knack for human connection, I
        orchestrate harmonious solutions that bridge the gap between the digital
        realm and the dance floor of life. Let's harmonize together,
        transforming melodies into great designs, beats into rhythmic
        development cycles, and progressions into solid infrastructures that
        support lasting user experiences.
      </Typography>
      <SpotifyNowPlaying />
    </Stack>
  );
}
