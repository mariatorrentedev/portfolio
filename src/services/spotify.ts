import type { NowPlayingItem } from "../types/spotify";
import axios from "axios";
import { Buffer } from "buffer";
import {
  TOKEN_ENDPOINT,
  NOW_PLAYING_ENDPOINT,
  CLIENT_ID as clientId,
  CLIENT_SECRET as clientSecret,
  REFRESH_TOKEN as refreshToken,
} from "../config";

export type GetAccessTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_toke: string;
  scope: string;
};

export const getAccessToken = async () => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const bodyParams = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
  const body = bodyParams.toString();

  try {
    const response = await axios.post<GetAccessTokenResponse>(
      TOKEN_ENDPOINT,
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
      NOW_PLAYING_ENDPOINT,
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
