import axios from "axios";

/* base url for requests to movie db */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
