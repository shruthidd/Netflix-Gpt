import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { Link } from "react-router-dom";
const MovieCards = ({posterpath, movieID}) => {

   if(!posterpath) return null;
  return (
    <div className='w-48 pr-4'>
      
     
     <Link to={`/watch/${movieID}`}>
      <img alt="Movie Card" src={IMG_CDN_URL + posterpath} 
      className="transition-transform transform hover:scale-110"
      />
      </Link>


    </div>
  )
}

export default MovieCards