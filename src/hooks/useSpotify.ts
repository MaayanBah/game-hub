import spotifyApi from "../services/api-spotify";

export const useSpotify = async <T>(
  urlRemainder: string,
  accessToken: string
): Promise<T | null> => {
  try {
    spotifyApi.defaults.headers.Authorization = `Bearer ${accessToken}`;

    const response = await spotifyApi.get(urlRemainder);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
