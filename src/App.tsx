import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import { paths as Paths } from "./config/paths";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Title title="TMDB" />
        <NavBar />
        <Switch>
          <Route exact path={Paths.root} component={MovieGrid} />
          <Route exact path={Paths.upcomingMovies} component={MovieGrid} />
          <Route exact path={Paths.nowPlayingMovies} component={MovieGrid} />
          <Route exact path={Paths.popularMovies} component={MovieGrid} />
          <Route exact path={Paths.topRatedMovies} component={MovieGrid} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
