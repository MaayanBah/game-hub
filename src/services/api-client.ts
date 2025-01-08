import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
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
  requestConfig?: AxiosRequestConfig;

  constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
    this.endpoint = endpoint;
    this.requestConfig = requestConfig;
  }

  getAll = () =>
    apiInstance
      .get<FetchResponse<T>>(this.endpoint, this.requestConfig)
      .then((res) => res.data);
}

export default APIClient;
