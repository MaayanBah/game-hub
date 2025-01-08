import { Platform } from "../entities/Platform";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client"
import apiClient from "../services/api-client";
import ms from "ms";

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: ms("24h"),
  });

export default usePlatforms;
