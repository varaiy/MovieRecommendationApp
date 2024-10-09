import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM0NjcwZDI5ZDkyNWY4NzdmNzdkMTM4OTRiNTEyNyIsIm5iZiI6MTcyNzU0OTY5MS4zMTk4MTcsInN1YiI6IjY2Zjg0ZTkzMTQwZmJmNmExYTVmNDgyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7sStV5DBJcjbdBui333Y7GI671Rc_Uwy1pBWk30lfnw",
  },
});

export default instance;
