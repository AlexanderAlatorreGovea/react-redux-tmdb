import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import { paths as Paths } from "./config/paths";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>TMDB</h1>
        <NavBar />
        <Route exact path={Paths.root} component={MovieGrid} />
        <Route exact path={Paths.upcomingMovies} component={MovieGrid} />
        <Route exact path={Paths.nowPlayingMovies} component={MovieGrid} />
        <Route exact path={Paths.popularMovies} component={MovieGrid} />
        <Route exact path={Paths.topRatedMovies} component={MovieGrid} />
      </div>
    </BrowserRouter>
  );
};

export default App;
