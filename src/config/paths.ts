import { Paths } from "./paths.model";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

export const paths: Paths = {
  root: "/",
  any: "*",
  upcomingMovies: "/movies/upcoming",
  topRatedMovies: "/movie/top_rated",
  popularMovies: "/movie/popular",
  nowPlayingMovies: "/movie/now_playing",
  api: {
    upcomingMovies: `${REACT_APP_BASE_URL}upcoming?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`,
    topRatedMovies: `${REACT_APP_BASE_URL}top_rated?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`,
    popularMovies: `${REACT_APP_BASE_URL}movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`,
    nowPlayingMovies: `${REACT_APP_BASE_URL}now_playing?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`,
  },
};
