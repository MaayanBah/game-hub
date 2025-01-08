import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../entities/Game";
import { GameQuery } from "../entities/GameQuery";
import APIClient, { FetchResponse } from "../services/api-client";

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new APIClient<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  });

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGames;
