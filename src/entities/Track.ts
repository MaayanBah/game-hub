import Album from "./Album";
import Artist from "./Artist";

export default interface Track {
  name: string;
  id: string;
  track: boolean;
  artists: Artist[];
  popularity: number;
  album: Album;
  external_urls: { spotify: string };
  duration_ms: number;
}
