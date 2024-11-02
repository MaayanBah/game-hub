import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  website: string;
  background_image: string;
  description: string;
  description_raw: string;
}

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
