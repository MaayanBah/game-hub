import { Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import usePlaylists from "../hooks/usePlaylists";
import { Playlist } from "../hooks/usePlaylists";
import { useEffect, useState } from "react";
import { getTopNSongs } from "../services/spotify-services";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function GameDetailsPage() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const { slug } = useParams();
  const { data } = useGame(slug!);

  let gameName = data?.name;
  useEffect(() => {
    if (gameName) {
      const fetchPlaylist = async () => {
        const fetchedPlaylist = await usePlaylists(gameName, 10);
        setPlaylists(fetchedPlaylist);
      };

      fetchPlaylist();
    } else {
      setPlaylists([]);
    }
  }, [gameName]);

  let names = getTopNSongs(playlists);

  return (
    <>
      <Text>Game Info: {data?.name}</Text>
      <ul>
        {names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </>
  );
}

export default GameDetailsPage;
