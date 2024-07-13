import React from 'react'
import GptMovieSuggest from './GptMovieSuggest'
import GptSearchBar from './GptSearchBar'
import { LOGIN_IMG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
     <div className="absolute m-340  h-96 bg-gradient-to-r  from-black bg-opacity-25 -z-10">
        <img
          className=" md:drop-shadow-xl"
          src= {LOGIN_IMG_URL}
          alt="backimg "
        />
      </div>
        <GptMovieSuggest/>
        <GptSearchBar/>
    </div>
  )
}

export default GPTSearch