import { paths as Paths } from "../../../config/paths";

export const pathnameToMovieType = (
  pathname: string,
  pageNumber?: number | undefined
): string => {
  switch (pathname) {
    case Paths.root:
    case Paths.upcomingMovies:
      return Paths.api.upcomingMovies(pageNumber);

    case Paths.topRatedMovies:
      return Paths.api.topRatedMovies(pageNumber);

    case Paths.popularMovies:
      return Paths.api.popularMovies(pageNumber);

    case Paths.nowPlayingMovies:
      return Paths.api.nowPlayingMovies(pageNumber);

    default:
      throw new Error(`${pathname} is not a valid movie type.`);
  }
};
