import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  //fetch data from TMDB API
  const dispatch = useDispatch();
  const getNowPlayMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    console.log(response.results);
    dispatch(addnowPlayingMovies(response.results));
  };
  useEffect(() => {
    getNowPlayMovies();
  }, []);
};

export default useNowPlayingMovies;
