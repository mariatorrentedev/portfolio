import { http, HttpResponse } from "msw";
import { config } from "../../config";

const basic = Buffer.from(
  `${config.CLIENT_ID}:${config.CLIENT_SECRET}`
).toString("base64");

export const handlers = [
  http.post(config.TOKEN_ENDPOINT, () => {
    return new HttpResponse(null, {
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }),
  http.get(config.NOW_PLAYING_ENDPOINT, () => {
    return new HttpResponse(null, {
      headers: {
        Authorization: `Bearer foo`,
      },
      status: 200,
    });
  }),
];
