import { Paths } from "./types/paths";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

export const paths: Paths = {
  root: "/",
  any: "*",
  upcomingMovies: "/movies/upcoming",
  topRatedMovies: "/movie/top_rated",
  popularMovies: "/movie/popular",
  nowPlayingMovies: "/movie/now_playing",
  api: {
    upcomingMovies: (pageNumber: number = 1): string =>
      `${REACT_APP_BASE_URL}upcoming?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`,
    topRatedMovies: (pageNumber: number = 1): string =>
      `${REACT_APP_BASE_URL}top_rated?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`,
    popularMovies: (pageNumber: number = 1): string =>
      `${REACT_APP_BASE_URL}popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`,
    nowPlayingMovies: (pageNumber: number = 1): string =>
      `${REACT_APP_BASE_URL}now_playing?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`,
  },
};
