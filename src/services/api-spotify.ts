import axios from "axios";

const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAccessToken = async (
  clientId: string,
  clientSecret: string
) => {
  const tokenApi = axios.create({
    baseURL: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const response = await tokenApi.post("", params, {
    auth: {
      username: clientId,
      password: clientSecret,
    },
  });

  return response.data;
};

export default spotifyApi;
