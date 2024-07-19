import React from 'react'
import GptMovieSuggest from './GptMovieSuggest'
import GptSearchBar from './GptSearchBar'
import { LOGIN_IMG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div className="fixed m-340  h-96 bg-gradient-to-r  from-black bg-opacity-25 -z-10">
        <img
          className=" h-screen object-cover md:min-h-screen fixed w-full"
          src= {LOGIN_IMG_URL}
          alt="backimg "
        />
      </div>
    <div  className=''>
       <GptSearchBar/>
        <GptMovieSuggest/>
    </div>
    </>
  )
}

export default GPTSearch