import React from "react";

import { Link } from "react-router-dom";
import Watch from "./Watch";

const VideoTitle = ({ title, overview , id}) => {
 
    
  return (
    <div className=" w-screen  aspect-video pt-[20%]  px-5 md:px-12 absolute text-white bg-gradient-to-tr from-black">
      <h1 className=" text-lg  md:text-5xl font-bold">{title}</h1>
      <p className=" hidden md:inline-block py-6 text-md w-2/4">{overview}</p>
      <div className="my-3">
      <Link to={`/Watch/${id}`}>
          <button className=" bg-white text-black py-1 md:py-3 px-2 md:px-10  text-base md:text-xl rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          </Link>
        <button className="  hidden md:inline-block  bg-gray-800 mx-2 text-white p-2 px-6 text-lg bg-opacity-400 rounded-md">
          {" "}
          ❕MoreInfo{" "}
        </button>
      </div>
    </div>
  );
};


export default VideoTitle;
