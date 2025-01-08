import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export const apiInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "19fe93b1dc5f4d16a573d95b1f00bca5",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
    this.endpoint = endpoint;
  }

  getAll = (requestConfig?: AxiosRequestConfig) =>
    apiInstance
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
}

export default APIClient;
