import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Icon,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useAccessToken, useNowPlaying } from "../services/queries";
import SpotifyIcon from "../assets/spotify.svg";
import { styled } from "@mui/system";
import { getProgressPercentage } from "./utils";

const StyledTypography = styled(Typography)(({ theme }) => ({
  maxWidth: 190,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  fontSize: 16,
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
    maxWidth: 120,
  },
}));

function SpotifyStatusMessage({ message }: { message: string }) {
  return (
    <Stack flexDirection="row" alignItems={["baseline", "center"]}>
      <Icon sx={{ marginTop: [0, 1], marginRight: 1 }}>
        <img src={SpotifyIcon} alt="Spotify" />
      </Icon>
      <Typography color="secondary.main">{message}</Typography>
    </Stack>
  );
}

export default function SpotifyNowPlaying() {
  const { isLoading: isAccessTokenLoading } = useAccessToken();
  const { data: nowPlayingData, isLoading, refetch } = useNowPlaying();

  React.useEffect(() => {
    // For the case when the spotify user stop and restart streaming, there is not refresh
    /**
     * For the case when the spotify user stop and restart the satreaming,
     * there is no refresh but we want to do a hard refresh of the query to
     * get the latest state, although we don't want to do it if is currently
     * playing because the query interval is in charge of that.
     *
     */
    if (!isAccessTokenLoading && !nowPlayingData?.is_playing) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <SpotifyStatusMessage message="Syncing to Maria's Tunes..." />
      ) : nowPlayingData &&
        nowPlayingData?.is_playing &&
        nowPlayingData?.currently_playing_type === "track" ? (
        <>
          <Typography color="secondary.main" variant="h6">
            MOOD:
          </Typography>
          <Card
            sx={{
              display: "flex",
              maxHeight: 90,
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: ["fit-content", 330],
              backgroundColor: "black",
              color: "white",
            }}
          >
            <CardContent sx={{ padding: [1, 0.7] }}>
              <StyledTypography>{nowPlayingData.item.name}</StyledTypography>
              <StyledTypography variant="subtitle1">
                {nowPlayingData.item?.artists
                  .map((_artist) => _artist.name)
                  .join(",")}
              </StyledTypography>
              <LinearProgress
                variant="determinate"
                value={getProgressPercentage(
                  nowPlayingData.progress_ms,
                  nowPlayingData.item.duration_ms
                )}
                sx={{ minWidth: [80, 200] }}
              />
            </CardContent>

            <Stack flexDirection="row">
              <Icon sx={{ marginTop: [0, 1], marginRight: 1 }}>
                <img src={SpotifyIcon} alt="Spotify" />
              </Icon>

              <Box maxWidth={70}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%" }}
                  image={nowPlayingData.item?.album.images[0].url}
                  alt={nowPlayingData.item.name}
                />
              </Box>
            </Stack>
          </Card>
        </>
      ) : (
        <SpotifyStatusMessage message="Maria's tunes are on pause, she's probably rocking out at a concert!" />
      )}
    </>
  );
}
