import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {Discover as SearchBar} from '@alexanderalatorregovea/new-collection.ui.discover';

import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import { paths as Paths } from "./config/paths";

const { REACT_APP_API_KEY } = process.env;

const App = () => {
  const [text, setText] = useState("");
  const [searchData, setSearchData] = useState<Response | null>(null);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    try {
      const { value } = event.target;
      setText(value);

      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${value}&api_key=${REACT_APP_API_KEY}&language=en-US`
      );

      if (!response.ok) {
        const errorMessage = "Something went wrong.";
        throw new Error(errorMessage);
      }

      const json = await response.json();

      setSearchData(json?.results);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar onChange={handleInputChange} targetValue={text} />
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
