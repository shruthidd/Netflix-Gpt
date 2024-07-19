import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidate } from "../utils/Validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_IMG_URL, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [issigninform, setIsSigninform] = useState(true);
  const [errormessage, setErrormessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);


  const handleClickButton = () => {
    //validate the form data
    //checkValidate()
    //console.log(name);
    //console.log(email);
    //console.log(password.current.value);                     //name is only for sign up form
    const message = checkValidate( email.current.value, password.current.value)
   // console.log(message)
   setErrormessage(message);
   if (message) return null;
        if(!issigninform) {
          //sign up logic
          createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVATAR
    }).then(() => {
      // Profile updated!
      const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      
    }).catch((error) => {
      // An error occurred
     setErrormessage(error.message)
    });
    
   // console.log(user);
   

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode + " - " + errorMessage)
    // ..
  });

        }
        else {
         //sign in logic
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //console.log(user)
   

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode + " - " + errorMessage)
  });
        }




  }

  const toggleButton = () => {
    setIsSigninform(!issigninform);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-screen  bg-gradient-to-r  from-black bg-opacity-25">
        <img
          className="  h-screen   md:h-full object-cover w-full "
          src= {LOGIN_IMG_URL}
          alt="backimg "
        />
      </div>
      <form onSubmit = { (e) => e.preventDefault()} className=" w-full md:w-4/12 absolute p-10 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-70 rounded-lg">
        <h1 className=" font-bold text-3xl py-4">
          {issigninform ? "Sign In" : "Sign Up"}
        </h1>
        {!issigninform && (
          <input
          ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-600 bg-opacity-60 rounded-sm"
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-600 bg-opacity-60 rounded-sm"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600 bg-opacity-60 rounded-sm"
        />
    <p className="text-red-600 font-bold py-2">{errormessage}</p>
        <button type="submit" className=" p-4 my-4 bg-red-700 w-full" onClick={handleClickButton}>
          {issigninform ? "Sign In" : "Sign Up"}
        </button>
        <p className=" cursor-pointer" onClick={toggleButton}>
          {issigninform
            ? "New to netflix? Sign Up"
            : "already registered.. please sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
