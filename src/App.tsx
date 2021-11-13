import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MovieGrid from "./components/MovieGrid";
import { TestContainer } from "./components/MovieGrid/MovieGrid";
import NavBar from "./components/NavBar"; 
import { paths as Paths } from "./config/paths";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>TMDB</h1>
        <NavBar />
        <Route exact path={Paths.root} component={TestContainer} />
        <Route exact path={Paths.upcomingMovies} component={TestContainer} />
        <Route exact path={Paths.nowPlayingMovies} component={TestContainer} />
        <Route exact path={Paths.popularMovies} component={TestContainer} />
        <Route exact path={Paths.topRatedMovies} component={TestContainer} />
      </div>
    </BrowserRouter>
  );
};

export default App;
 