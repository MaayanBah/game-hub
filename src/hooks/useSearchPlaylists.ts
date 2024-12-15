import { useSpotify } from "./useSpotify";

export interface SearchPlaylistResult {
  name: string;
  id: string;
  tracks: { href: string; total: number };
}

interface SpotifySearchPlaylistResponse {
  playlists: {
    items: SearchPlaylistResult[];
  };
}

const useSearchPlaylists = async (
  searchQuery: string,
  limit: number
): Promise<SearchPlaylistResult[]> => {
  try {
    const data: SpotifySearchPlaylistResponse | null =
      await useSpotify<SpotifySearchPlaylistResponse>(
        `/search?q=${encodeURIComponent(
          searchQuery
        )}&type=playlist&limit=${limit}`
      );
    if (data?.playlists && data.playlists.items.length > 0) {
      return data.playlists.items.filter((item) => item != null);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
};

export default useSearchPlaylists;
