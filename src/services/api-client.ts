import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "19fe93b1dc5f4d16a573d95b1f00bca5",
  },
});
