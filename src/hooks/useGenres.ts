import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client"
import apiClient from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genre"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: ms("24h"),
  });

export default useGenres;
