import { Track } from "../entities/Track";
import { useSpotify } from "./useSpotify";

export interface Item {
  track: Track;
}

interface SpotifyPlaylistResponse {
  items: Item[];
}

const usePlaylist = async (playlistId: string): Promise<Track[]> => {
  try {
    const data: SpotifyPlaylistResponse | null =
      await useSpotify<SpotifyPlaylistResponse>(
        `/playlists/${playlistId}/tracks`
      );

    if (data?.items && data?.items.length > 0) {
      return data.items.map((item) => item.track);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
};

export default usePlaylist;
