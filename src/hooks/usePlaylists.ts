import { useSpotify } from "./useSpotify";

export interface Playlist {
  name: string;
  tracks: { href: string; total: number };
}

interface SpotifyPlaylistResponse {
  playlists: {
    items: Playlist[];
  };
}

const usePlaylists = async (
  gameName: string,
  limit: number
): Promise<Playlist[]> => {
  try {
    const data: SpotifyPlaylistResponse | null =
      await useSpotify<SpotifyPlaylistResponse>(
        `/search?q=${encodeURIComponent(gameName)}&type=playlist&limit=${limit}`
      );
    if (data?.playlists && data.playlists.items.length > 0) {
      return data.playlists.items;
    } else {
      console.log("No playlists found.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
};

export default usePlaylists;
