import React from "react";
import MovieBackground from "./MovieBackground/MovieBackground";
import MovieListContainer from "./MovieList/MovieListContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GPT/GptSearch";
const BrowseHome = () => {
  const showGptSearch = useSelector((store) => store?.GPT?.showGptSearch);
  return (
    <div>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MovieBackground />
          <MovieListContainer />
        </>
      )}
    </div>
  );
};

export default BrowseHome;
