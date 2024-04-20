import type { QueryObserverOptions } from "react-query";
import type { GetAccessTokenResponse } from "../spotify";
import { useQuery } from "react-query";
import { getAccessToken } from "../spotify";

export const useAccessToken = (
  options?: QueryObserverOptions<GetAccessTokenResponse>
) => {
  return useQuery<GetAccessTokenResponse>("accessToken", getAccessToken, {
    ...options,
    staleTime: Infinity,
  });
};
