import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Game } from "../entities/Game";

const useGame = (slug: string) => {
  let endpoint = `/games/${slug}`;
  const [data, setData] = useState<Game | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Game>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [slug]);

  return { data, error };
};

export default useGame;
