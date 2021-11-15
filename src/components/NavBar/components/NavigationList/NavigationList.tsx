import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DEFAULT_PAGE } from "./constants";
import { paths as Paths } from "../../../../config/paths";
import { RootState } from "../../../../store/store";

import Button from "../../../Button";
import NavigationLink from "../NavigationLink";

import {
  fetchMovies,
  setNextPage,
  setPreviousPage,
} from "../../../MovieGrid/redux/movies.actions";
import { useLocation } from "react-router";

const NavigationList: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, page: currentPage } = useSelector(
    (state: RootState) => state.movies
  );
  const { pathname: currentPathName } = useLocation();

  const totalPages = movies?.total_pages;
  const previousPage = movies?.page;
  const isNextButtonDisabled = previousPage === totalPages;
  const isPrevButtonDisabled = currentPage === DEFAULT_PAGE;

  const onNextMoviePage = () => {
    dispatch(setNextPage(currentPage, dispatch, currentPathName));
  };

  const onPreviousMoviePage = () => {
    dispatch(setPreviousPage(currentPage, dispatch, currentPathName));
  };

  return (
    <nav>
      <div>
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
      </div>
    </nav>
  );
};

export default NavigationList;
