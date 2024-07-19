import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  //fetch data from TMDB API
  const dispatch = useDispatch();
  const UpcomimgMovies = useSelector(store => store.movies.UpcomimgMovies)
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    //console.log(response);
    dispatch(addUpcomingMovies(response.results));
  };
  useEffect(() => {
    !UpcomimgMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
