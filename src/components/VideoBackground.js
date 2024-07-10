import React, { useEffect, useState } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";


const VideoBackground = ({ movieID }) => {
 // const [videoTrailer, setvideoTrailer] = useState();        instead we can use redux store we want to put it into store

 const trailerVideo = useSelector(store => store.movies?.trailerVideo)
 useMovieTrailer(movieID);
   
  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
      //  width="screen"
      //   height="screen"
        src= {"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1" }
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
