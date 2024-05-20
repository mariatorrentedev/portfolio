import { http, HttpResponse } from "msw";
import {
  TOKEN_ENDPOINT,
  NOW_PLAYING_ENDPOINT,
  CLIENT_ID,
  CLIENT_SECRET,
} from "../../config";

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

export const handlers = [
  http.post(TOKEN_ENDPOINT, () => {
    return new HttpResponse(null, {
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }),
  http.get(NOW_PLAYING_ENDPOINT, () => {
    return new HttpResponse(null, {
      headers: {
        Authorization: `Bearer foo`,
      },
      status: 200,
    });
  }),
];
