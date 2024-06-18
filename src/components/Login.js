import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  
  const[issigninform, setIsSigninform] = useState(true)

  const toggleButton = () =>{
        setIsSigninform(!issigninform)
  }
  return (
    <div>
      <Header/>
    <div className='absolute m-340  h-96 bg-gradient-to-r  from-black bg-opacity-25' >
      
      <img className=' md:drop-shadow-xl' src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "backimg "/>
    </div>
    <form className='w-4/12 absolute p-10 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-70 rounded-lg'>
    <h1 class0 Name=' font-bold text-3xl py-4'>{issigninform ? "Sign In" : "Sign Up"}</h1>
    {!issigninform &&<input type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-600 bg-opacity-60 rounded-sm'  />}
    <input type="text" placeholder='Email address' className='p-4 my-4 w-full bg-gray-600 bg-opacity-60 rounded-sm'  />
    <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-600 bg-opacity-60 rounded-sm' />
    <button type = "submit" className=' p-4 my-4 bg-red-700 w-full'>{issigninform ? "Sign In" : "Sign Up"}</button>
    <p className=' cursor-pointer'  onClick={toggleButton}>{issigninform ?  "New to netflix? Sign Up" : "already registered.. please sign in" }</p>
    </form>
    </div>
  )
}

export default Login