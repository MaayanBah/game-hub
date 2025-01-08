import { apiInstance } from "../services/api-client";
import { Game } from "../entities/Game";
import ms from "ms";
import { useQuery } from "@tanstack/react-query";

const useGame = (slug: string) => {
  let endpoint = `/games/${slug}`;
  const controller = new AbortController();

  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () =>
      apiInstance
        .get<Game>(endpoint, {
          signal: controller.signal,
        })
        .then((res) => res.data),
    staleTime: ms("24h"),
  });
};

export default useGame;
