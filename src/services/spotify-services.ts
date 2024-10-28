import { Playlist } from "@/hooks/usePlaylists";

export const getTopNSongs = (playlists: Playlist[]) => {
  let names = playlists.map((playlist) => playlist.name);
  return names;
};
