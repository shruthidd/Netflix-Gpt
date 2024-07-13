import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({posterpath}) => {
  return (
    <div className='w-48 pr-4'>
      
     <img alt = "Movie card"  src={IMG_CDN_URL+ posterpath} />



    </div>
  )
}

export default MovieCards