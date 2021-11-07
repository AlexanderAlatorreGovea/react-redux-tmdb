import { paths as Paths } from "../../../config/paths";

export const pathnameToMovieType = (pathname: string): string => {
  switch (pathname) {
    case Paths.root: 
    case Paths.upcomingMovies:
      return Paths.api.upcomingMovies(1);

    case Paths.topRatedMovies:
      return Paths.api.topRatedMovies(1);

    case Paths.popularMovies:
      return Paths.api.popularMovies(1);

    case Paths.nowPlayingMovies:
      return Paths.api.nowPlayingMovies(1);

    default:
      throw new Error(`${pathname} is not a valid emailType`);
  }
};
