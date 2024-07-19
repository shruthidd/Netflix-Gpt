import React, { useEffect } from "react";

import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  //fetch the data and updatng the store
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMoviesTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + 
        movieID +
        "/videos?language=en-US",
      API_OPTIONS
    );

    
    const response = await data.json();
    //console.log(response);

    const fetchData = response.results.filter(
      (video) => video.type === "Trailer"
    );
    //console.log(fetchData);
    const trailer = fetchData.length ? fetchData[0] : response.results[0]; //if trailer length is not 0 or present print first trailer and trailer length is 0 then return first video of resopnse (teaser or anything)
    //console.log(trailer);
    //  setvideoTrailer(trailer.key)
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo &&   getMoviesTrailer();
  }, [movieID]);
};

export default useMovieTrailer;
