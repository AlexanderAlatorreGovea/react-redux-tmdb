import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { paths as Paths } from "../../../../config/paths";
import { RootState } from "../../../../store/store";

import Button from "../../../Button";
import NavigationLink from "../NavigationLink";

import {
  setNextPage,
  setPreviousPage,
} from "../../../MovieGrid/redux/movies.actions";
import { useLocation } from "react-router";

const NavigationList = () => {
  const DEFAULT_PAGE = 1;
  const dispatch = useDispatch();
  const { movies, page: currentPage } = useSelector(
    (state: RootState) => state.movies
  );
  const { pathname: currentPathName } = useLocation();

  const onNextMoviePage = () => {
    dispatch(setNextPage(currentPage, dispatch, currentPathName));
  };

  const onPreviousMoviePage = () => {
    dispatch(setPreviousPage(currentPage, dispatch, currentPathName));
  };

  const totalPages = movies?.total_pages || 0;
  const previousPage = movies?.page || 0;
  const isNextButtonDisabled = previousPage === totalPages;
  const isPrevButtonDisabled = currentPage === DEFAULT_PAGE;

  return (
    <nav>
      <div>
        <p>Total Pages: {totalPages}</p>
        <p>Current Page: {currentPage}</p>
        <Button disabled={isPrevButtonDisabled} onClick={onPreviousMoviePage}>
          Previous
        </Button>
        <Button disabled={isNextButtonDisabled} onClick={onNextMoviePage}>
          Next
        </Button>

        <NavigationLink label="Upcoming" path={Paths.upcomingMovies} />
        <NavigationLink label="Top Rated" path={Paths.topRatedMovies} />
        <NavigationLink label="Popular" path={Paths.popularMovies} />
        <NavigationLink label="Now Playing" path={Paths.nowPlayingMovies} />
      </div>
    </nav>
  );
};

export { NavigationList };
