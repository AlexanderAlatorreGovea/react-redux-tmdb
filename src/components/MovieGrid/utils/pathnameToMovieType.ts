import { paths as Paths } from "../../../config/paths";

export const pathnameToMovieType = (pathname: string): string => {
  switch (pathname) {
    case Paths.root:
    case Paths.upcomingMovies:
      return "upcomingMovies";

    case Paths.topRatedMovies:
      return "topRatedMovies";

    case Paths.popularMovies:
      return "popularMovies";

    case Paths.nowPlayingMovies:
      return "nowPlayingMovies";

    default:
      throw new Error(`${pathname} is not a valid emailType`);
  }
};
