import * as React from "react";
import type { GetNowPlayingResponse } from "../services/spotify";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import { getNowPlaying } from "../services/spotify";
import SpotifyIcon from "../assets/spotify.svg";
import {
  CLIENT_ID as clientId,
  CLIENT_SECRET as clientSecret,
  REFRESH_TOKEN as refreshToken,
} from "../constants";
import { styled } from "@mui/system";

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

function SpotifyMessage({ message }: { message: string }) {
  return (
    <Stack flexDirection="row" alignItems="center">
      <Icon sx={{ marginTop: [0, 1], marginRight: 1 }}>
        <img src={SpotifyIcon} alt="Spotify" />
      </Icon>
      <Typography color="secondary.main">{message}</Typography>
    </Stack>
  );
}

export default function SpotifyNowPlaying() {
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
  }, []);

  return (
    <>
      {loading ? (
        <SpotifyMessage message="Syncing to Maria's Tunes..." />
      ) : nowPlayingData && nowPlayingData?.is_playing ? (
        <Card
          sx={{
            display: "flex",
            maxHeight: 70,
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: ["fit-content", 330],
            backgroundColor: "black",
            color: "white",
          }}
        >
          <CardContent sx={{ padding: "12px" }}>
            <StyledTypography>{nowPlayingData.item.name}</StyledTypography>
            <StyledTypography variant="subtitle1">
              {nowPlayingData.item?.artists
                .map((_artist) => _artist.name)
                .join(",")}
            </StyledTypography>
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
      ) : (
        <SpotifyMessage message=" Maria's tunes are on pause, she's probably rocking out at a concert!" />
      )}
    </>
  );
}
