import useSearchPlaylists, {
  SearchPlaylistResult,
} from "../hooks/useSearchPlaylists";
import usePlaylist from "../hooks/usePlaylist";
import Track from "../entities/Track";

interface TrackWithCount {
  track: Track;
  count: number;
}

export const fetchTracks = async (
  playlists: SearchPlaylistResult[],
  setTopTracks: React.Dispatch<React.SetStateAction<Track[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  accessToken: string
) => {
  if (playlists.length > 0) {
    const fetchedTracks = await getTopNSongs(playlists, 5, accessToken);
    setTopTracks(fetchedTracks);
    setLoading(false);
  }
};

export const fetchPlaylist = async (
  gameName: string,
  setPlaylists: React.Dispatch<React.SetStateAction<SearchPlaylistResult[]>>,
  accessToken: string
) => {
  const fetchedPlaylist = await useSearchPlaylists(gameName, 10, accessToken);
  setPlaylists(fetchedPlaylist);
};

export const getTopNSongs = async (
  playlists: SearchPlaylistResult[],
  topN: number,
  accessToken: string
) => {
  const tracks_promise: Track[][] = await Promise.all(
    playlists.map(async (playlist) => {
      if (playlist.tracks.total > 0) {
        return await usePlaylist(playlist.id, accessToken);
      }
      return [];
    })
  );

  const allTracks: Track[] = tracks_promise
    .flat()
    .filter((track): track is Track => {
      return (
        track !== null &&
        track.external_urls &&
        Object.keys(track.external_urls).length > 0
      );
    });

  const trackCount = allTracks.reduce((acc, track) => {
    acc[track.id] = (acc[track.id] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const tracksWithCounts: TrackWithCount[] = [];
  const uniqueTracks = new Set<string>();

  allTracks.forEach((track) => {
    if (!uniqueTracks.has(track.id)) {
      uniqueTracks.add(track.id);
      tracksWithCounts.push({
        track: track,
        count: trackCount[track.id],
      });
    }
  });

  const sortedTracks = tracksWithCounts.sort((a, b) => b.count - a.count);
  return sortedTracks.slice(0, topN).map((tc) => tc.track);
};
