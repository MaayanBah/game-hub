import { Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import { SearchPlaylistResult } from "../hooks/useSearchPlaylists";
import { useEffect, useState } from "react";
import {
  fetchPlaylist,
  fetchTracks as fetchTopTracks,
} from "../services/spotify-services";
import { Track } from "../hooks/usePlaylist";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function GameDetailsPage() {
  const [playlists, setPlaylists] = useState<SearchPlaylistResult[]>([]);
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  const { slug } = useParams();
  const { data } = useGame(slug!);

  let gameName = data?.name;
  useEffect(() => {
    if (!gameName) return;

    fetchPlaylist(gameName, setPlaylists);
  }, [gameName]);

  useEffect(() => {
    fetchTopTracks(playlists, setTopTracks);
  }, [playlists]);

  return (
    <>
      <Text>{data?.name}</Text>
      <ul>
        {topTracks.map((track) => {
          return <li key={track.id}>{track.name}</li>;
        })}
      </ul>
    </>
  );
}

export default GameDetailsPage;
