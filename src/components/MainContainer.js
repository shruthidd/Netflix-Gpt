import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
const movies = useSelector( store => store.movies.nowPlayingMovies)
if(!movies) return;   // OR if(movies === null) or if(movies === 0)   bcz in redux, movies its a null when rendering the page 
//so first put condition if movies === null then return nothing , then only it prints the next one
const mainMovies = movies[0];
//console.log(mainMovies)

const {original_title, overview, id} = mainMovies;
  return (
    <div>
      <VideoTitle title = {original_title} overview = {overview}  id = {id} />
      <VideoBackground movieId = {id}/>


    </div>

  )
}

export default MainContainer