import  { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import Netflix_Logo_PM from "../assets/Netflix_Logo_PM.png";
import useMovieTrailer from "../hooks/useMovieTrailer";
import {  API_OPTIONS, LOGO } from "../utils/constants";
import { useParams } from "react-router-dom";
import { addTrailerVideo } from "../utils/moviesSlice";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";

const Watch = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  //useMovieTrailer();
  const { movieID } = useParams();
  const [recommendations, setRecommendations] = useState([]); // Initialize as an empty array
 

  const fetchData = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' +
    movieID +
    '/videos?language=en-US',
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json)
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0]
    dispatch(addTrailerVideo(trailer));
  };



  const getMovieSuggestions = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/' +
    movieID + '/recommendations?language=en-US&page=1',
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const media = await response.json();
      setRecommendations(media.results);
      // console.log(media)
    } catch (error) {
      // console.error("Error fetching data:", error);
     
    }
  };
  useEffect(() => {
    fetchData();
    getMovieSuggestions();
  }, [movieID]);
 

  return (
    
    <div className="bg-black  h-screen object-cover">
    <div className="absolute   px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row  top-0 left-0  w-full  z-50 justify-between">
      <a href="/" className=" text-white">
        {/* <img className="w-60 mx-auto m  md:mx-0 " src={Netflix_Logo_PM} alt="logo" /> */}
        <img className="  w-20  md:w-60 mx-auto   md:mx-0" src = {LOGO}/>

      </a>
      
        <Link  to = {`/Browse`}>   
        <button className="text-red-900 bg-black text-lg font-bold my-2 md:mx-5 w-20 h-19">Back⬅️</button>
        </Link>
       
      
      
      </div>
      <div className=" md:h-screen min-w-full max-w-full mt-[-4rem]">
        <iframe
          className="h-[416px] md:h-[calc(100%-0px)] w-full pt-[118px] md:pt-[70px]"
          src={"https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        
      </div>
      

      <div className="  bg-black object-cover text-white bg-opacity-90">
      <MovieList title="Recommendations" movies={recommendations} />
      </div>
      </div>
    
  );
};

export default Watch;