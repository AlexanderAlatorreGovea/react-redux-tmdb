export type Paths = {
  root: string;
  any: string;
  upcomingMovies: string;
  topRatedMovies: string;
  popularMovies: string;
  nowPlayingMovies: string;
  api: {
    upcomingMovies: (argument?: number | undefined) => string;
    topRatedMovies: (argument?: number | undefined) => string;
    popularMovies: (argument?: number | undefined) => string;
    nowPlayingMovies: (argument?: number | undefined) => string;
  };
};
