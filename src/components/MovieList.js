import React from "react";
import MovieCards from "./MovieCards";
//import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
  //const movies = useSelector(store => store.movies)
  //console.log(movies);
  return (
    <div className="py-0 ">
      <h1 className="text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterpath={movie.poster_path} movieID={movie.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
