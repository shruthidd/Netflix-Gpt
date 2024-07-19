import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggest = () => {
  const { GptMovieNames, TmdbMovieResults } = useSelector((store) => store.gpt);
  if (!GptMovieNames) return null;

  return (
    <div className="p-5 m-6 bg-black text-white bg-opacity-85">
      <div>
        {GptMovieNames.map((movieName, index) => (
          <MovieList title={movieName}  key = {movieName}movies={TmdbMovieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggest;
