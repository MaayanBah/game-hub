import { Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function GameDetailsPage() {
  const { slug } = useParams();
  const { data } = useGame(slug!);
  if (!data) return <Text>Loading...</Text>;

  return <Text>Game Info: {data.name}</Text>;
}

export default GameDetailsPage;
