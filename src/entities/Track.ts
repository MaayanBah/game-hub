import { Album } from "./Album";

export interface Track {
  name: string;
  id: string;
  track: boolean;
  popularity: number;
  album: Album;
  external_urls: { spotify: string };
  duration_ms: number;
}
