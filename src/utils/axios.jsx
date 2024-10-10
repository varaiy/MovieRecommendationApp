import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer d09e1afd3d1fa1be8cc23fd677626706`,
  },
});

export default instance;
