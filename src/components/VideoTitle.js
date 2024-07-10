import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen  aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-tr from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
     <p className='py-6 text-md w-2/4'>{overview}</p>
     <div className=''>
       <button className=' bg-white text-black p-2 px-8 text-lg bg-opacity-200 rounded-md hover:bg-opacity-80' > ▶ Play</button>
       <button className='bg-gray-800 mx-2 text-white p-2 px-6 text-lg bg-opacity-400 rounded-md'> ❕MoreInfo   </button>

     </div>




    </div>
  )
}

export default VideoTitle