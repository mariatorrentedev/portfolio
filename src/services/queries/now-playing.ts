import type { QueryObserverOptions } from "react-query";
import type { GetNowPlayingResponse } from "../spotify";
import { useQuery, useQueryClient } from "react-query";
import { getNowPlaying } from "../spotify";
import { useAccessToken } from ".";

export const useNowPlaying = (
  options?: QueryObserverOptions<GetNowPlayingResponse>
) => {
  const { data: accessTokenData, isLoading: accessTokenLoading } =
    useAccessToken();
  /**
   * TODO: Investigate WebSocket or polling option, anything that will prevent
   * fetching the data every 5 seconds.
   *
   * Retrieve previous nowPlayingData from cache.
   */
  const queryClient = useQueryClient();
  const previousNowPlayingData =
    queryClient.getQueryData<GetNowPlayingResponse>("nowPlaying");

  return useQuery<GetNowPlayingResponse>(
    "nowPlaying",
    () => getNowPlaying(accessTokenData?.access_token),
    {
      ...options,
      refetchInterval:
        previousNowPlayingData && previousNowPlayingData.is_playing
          ? 5000 // 5 seconds for now, no like.
          : false,
      enabled: !!accessTokenData && !accessTokenLoading,
      staleTime: Infinity,
    }
  );
};
