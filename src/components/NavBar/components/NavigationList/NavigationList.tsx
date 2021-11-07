import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { errors as Errors } from "../../../../config/errors";
import { paths as Paths } from "../../../../config/paths";
import { usePrevious } from "../../../../hooks/usePrevious";
import { RootState } from "../../../../store/store";
import { fetchMovies } from "../../../MovieGrid/redux/movies.actions";

import Button from "../../../Button";
import NavigationLink from "../NavigationLink";

const NavigationList: React.FC = () => {
  const INITIAL_PAGE_NUMBER = 1;

  const dispatch = useDispatch();
  const { pathname: currentPathName } = useLocation();
  const { movies } = useSelector((state: RootState) => state.movies);

  const [pageNumber, setPageNumber] = useState(INITIAL_PAGE_NUMBER);

  const previousPathName = usePrevious(window.location.pathname);
  const previousPageNumber = usePrevious(pageNumber);

  useEffect(() => {
    if (previousPathName !== currentPathName) {
      setPageNumber((previousPage) => (previousPage = INITIAL_PAGE_NUMBER));
    }

    if (previousPageNumber !== pageNumber) {
      dispatch(
        fetchMovies(currentPathName, Errors.fetchErrors.GENERIC, pageNumber)
      );
    }
  }, [
    currentPathName,
    dispatch,
    pageNumber,
    previousPageNumber,
    previousPathName,
  ]);

  const onNextMoviePage = () => {
    setPageNumber((previousPage) => previousPage + 1);
  };

  const onPreviousMoviePage = () => {
    setPageNumber((previousPage) => previousPage - 1);
  };

  const totalPages = movies?.total_pages || 0;
  const currentPage = movies?.page || 0;
  const isNextButtonDisabled = currentPage === totalPages;
  const isPrevButtonDisabled = currentPage === 1;

  return (
    <nav>
      <u>
        <p>Total Pages: {movies && totalPages}</p>
        <p>Current Page: {movies && currentPage}</p>
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
      </u>
    </nav>
  );
};

export default NavigationList;
