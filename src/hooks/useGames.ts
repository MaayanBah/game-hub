import { GameQuery } from "../entities/GameQuery";
import useData from "./useData";
import { Game } from "../entities/Game";

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
