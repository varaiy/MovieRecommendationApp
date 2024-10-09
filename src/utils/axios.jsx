import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM0NjcwZDI5ZDkyNWY4NzdmNzdkMTM4OTRiNTEyNyIsIm5iZiI6MTcyODQ1NjQwOC41MjUxMzUsInN1YiI6IjY2Zjg0ZTkzMTQwZmJmNmExYTVmNDgyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CVTcUjy8nrdT07l1c2eX1r2CnaLwo91gtHxjWMfEC78'
  },
});

export default instance;
