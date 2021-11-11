import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { paths as Paths } from "../../../../config/paths";
import { RootState } from "../../../../store/store";

import Button from "../../../Button";
import NavigationLink from "../NavigationLink";

import {
  setCurrentPage,
  setNextPage,
  setPreviousPage,
} from "../../../MovieGrid/redux/movies.actions";

const NavigationList: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, page } = useSelector((state: RootState) => state.movies);

  const onNextMoviePage = () => {
    dispatch(setNextPage(page));
  };

  const onPreviousMoviePage = () => {
    dispatch(setPreviousPage(page));
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
