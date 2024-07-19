import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  //fetch data from TMDB API
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  const getNowPlayMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    //console.log(response);
    dispatch(addnowPlayingMovies(response.results));
  };
  useEffect(() => {
      !nowPlayingMovies && getNowPlayMovies();
  }, []);
};

export default useNowPlayingMovies;
