import { getAccessToken } from "../services/api-spotify";
import spotifyApi from "../services/api-spotify";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID!;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET!;

export const useSpotify = async <T>(
  urlRemainder: string
): Promise<T | null> => {
  try {
    const tokenResponse = await getAccessToken(clientId, clientSecret);
    const accessToken = tokenResponse.access_token;

    spotifyApi.defaults.headers.Authorization = `Bearer ${accessToken}`;

    const response = await spotifyApi.get(urlRemainder);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
