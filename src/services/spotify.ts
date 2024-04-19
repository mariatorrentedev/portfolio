import type { NowPlayingItem, AuthProps } from "../types/spotify";
import axios from "axios";
import { Buffer } from "buffer";
import { TOKEN_ENDPOINT, NOW_PLAYING_ENDPOINT } from "../constants";

type GetAccessTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_toke: string;
  scope: string;
};

const getAccessToken = async ({
  clientId,
  clientSecret,
  refreshToken,
}: AuthProps) => {
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
  currently_playing_type: string;
  item: NowPlayingItem;
};

export const getNowPlaying = async ({
  clientId,
  clientSecret,
  refreshToken,
}: AuthProps) => {
  try {
    const { access_token } = await getAccessToken({
      clientId,
      clientSecret,
      refreshToken,
    });
    const response = await axios.get<GetNowPlayingResponse>(
      NOW_PLAYING_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting now playing information:", error);
    throw error;
  }
};
