export type AuthProps = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
};

type ExternalUrls = {
  spotify: string;
};

export type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

type Image = {
  height: number;
  url: string;
  width: number;
};

type Album = {
  album_type: string;
  artists: Artist[];
  images: Image[];
};

export type NowPlayingItem = {
  name: string;
  album: Album;
  artists: Artist[];
  external_urls: ExternalUrls;
};
