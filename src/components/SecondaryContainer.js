import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

const movies = useSelector( store => store.movies);



  return (
  movies?.nowPlayingMovies &&(
    <div className=' bg-black '>
      <div className='-mt-52 relative z-20'>

    <MovieList title = {"now playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title = {"Upcoming"} movies={movies.UpcomingMovies}/>
    <MovieList title = {"Popular"} movies={movies.PopularMovies}/>
    <MovieList title = {"Top Rated"} movies={movies.nowPlayingMovies}/>
    <MovieList title = {"Horror"} movies={movies.nowPlayingMovies}/>
    <MovieList title = {"New on Netflix"} movies={movies.nowPlayingMovies}/>

    </div>
    </div>
  )
)
}

export default SecondaryContainer