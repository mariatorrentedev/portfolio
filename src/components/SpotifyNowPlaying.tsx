import * as React from "react";
import type { AuthProps } from "../types/spotify";
import type { GetNowPlayingResponse } from "../services/spotify";
import {
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { getNowPlaying } from "../services/spotify";

export default function SpotifyNowPlaying({
  clientId,
  clientSecret,
  refreshToken,
}: AuthProps) {
  const [loading, setLoading] = React.useState(true);
  const [nowPlayingData, setNowPlayingData] =
    React.useState<GetNowPlayingResponse | null>(null);

  React.useEffect(() => {
    getNowPlaying({ clientId, clientSecret, refreshToken })
      .then((response) => {
        setNowPlayingData(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching now playing data:", error);
      });
  }, [clientId, clientSecret, refreshToken]);

  return (
    <>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : nowPlayingData && nowPlayingData?.is_playing ? (
        <Card
          sx={{
            display: "flex",
            maxHeight: 70,
            justifyContent: "space-between",
            maxWidth: ["fit-content", 300],
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Stack flexDirection="column" alignItems="baseline">
            <CardContent sx={{ padding: 1.5 }}>
              <Typography fontSize={["0.7rem", "1rem"]}>
                {nowPlayingData.item.name}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                fontSize={["0.7rem", "1rem"]}
              >
                {nowPlayingData.item?.artists
                  .map((_artist) => _artist.name)
                  .join(",")}
              </Typography>
            </CardContent>
          </Stack>
          <Box maxWidth={70}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image={nowPlayingData.item?.album.images[0].url}
              alt={nowPlayingData.item.name}
            />
          </Box>
        </Card>
      ) : (
        <Typography>You're offline.</Typography>
      )}
    </>
  );
}
