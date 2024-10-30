import { useSpotify } from "./useSpotify";

export interface Track {
  name: string;
  id: string;
  track: boolean;
  popularity: number;
  album: Album;
}

export interface Album {
  images: { url: string }[];
}

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
