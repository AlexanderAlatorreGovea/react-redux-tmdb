import React from "react";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>TMDB</h1>
      <NavBar />
      <MovieGrid />
    </div>
  );
};

export default App;
