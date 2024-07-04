import type { NowPlayingItem } from "../types/spotify";
import axios from "axios";
import { Buffer } from "buffer";
import { config } from "../config";

export type GetAccessTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_toke: string;
  scope: string;
};

export const getAccessToken = async () => {
  const basic = Buffer.from(
    `${config.CLIENT_ID}:${config.CLIENT_SECRET}`
  ).toString("base64");

  const bodyParams = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: config.REFRESH_TOKEN,
  });
  const body = bodyParams.toString();

  try {
    const response = await axios.post<GetAccessTokenResponse>(
      config.TOKEN_ENDPOINT,
      body,
      {
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
};

export type GetNowPlayingResponse = {
  is_playing: boolean;
  currently_playing_type: "track" | "episode";
  item: NowPlayingItem;
  progress_ms: number;
};

export const getNowPlaying = async (accessToken?: string) => {
  try {
    if (!accessToken) {
      throw "No Access Token available.";
    }
    const response = await axios.get<GetNowPlayingResponse>(
      config.NOW_PLAYING_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting now playing information:", error);
    throw error;
  }
};
