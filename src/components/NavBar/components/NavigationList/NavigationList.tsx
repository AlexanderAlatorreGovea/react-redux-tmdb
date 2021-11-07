import React from "react";
import { paths as Paths } from "../../../../config/paths";
import NavigationLink from "../NavigationLink";

const NavigationList: React.FC = () => {
  return (
    <nav>
      <u>
        <NavigationLink label="Upcoming" path={Paths.upcomingMovies} />
        <NavigationLink label="Top Rated" path={Paths.topRatedMovies} />
        <NavigationLink label="Popular" path={Paths.popularMovies} />
        <NavigationLink label="Now Playing" path={Paths.nowPlayingMovies} />
      </u>
    </nav>
  );
};

export default NavigationList;
