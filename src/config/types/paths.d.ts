export type Paths = {
  root: string;
  any: string;
  upcomingMovies: string;
  topRatedMovies: string;
  popularMovies: string;
  nowPlayingMovies: string;
  api: {
    upcomingMovies: (argument?: number) => string;
    topRatedMovies: (argument?: number) => string;
    popularMovies: (argument?: number) => string;
    nowPlayingMovies: (argument?: number) => string;
  };
};
