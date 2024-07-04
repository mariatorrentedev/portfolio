export const config = {
  CLIENT_ID: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
  CLIENT_SECRET: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
  REFRESH_TOKEN: import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN,
  ENV: import.meta.env.VITE_APP_NODE_ENV,
  CLOUD_NAME: import.meta.env.VITE_APP_CLOUD_NAME,
  TOKEN_ENDPOINT: "https://accounts.spotify.com/api/token",
  NOW_PLAYING_ENDPOINT:
    "https://api.spotify.com/v1/me/player/currently-playing",
};
