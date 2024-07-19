import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langauageConstants";
//import openai from "../utils/openAi";
import groq from "../utils/GroqAi";
import { API_OPTIONS } from "../utils/constants";
import { addTmdbGptResults } from "../utils/gptSlice";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTmdb = async (movie) => {
    const moviename = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await moviename.json();
    return data.results;
  };

  //useEffect ( () => {})

  const handleGptSearchClick = async () => {
   // console.log(searchText.current.value);

    //make an api call to get the movie results
    //  const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Say this is a test' }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(gptResults.choices);
    const gptquery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      " only give me names of 5 movies, and it is comma separated  just dispaly movie names and dont add any extra sentence example: Gadar, Sholey, Don, Golaml, Koi Mil gaya ";
    const gptResults = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptquery,
        },
      ],
      model: "llama3-8b-8192",
    });
   // console.log(gptResults.choices);

    if (!gptResults.choices) return "please enter wisely";

    const gptMovies = gptResults.choices[0].message.content.split(",");
   // console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    //[Promise, promise, promise, promise, promise]
    //console.log(promiseArray)
    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);

    dispatch(addTmdbGptResults({ GptMovieNames: gptMovies, TmdbMovieResults:tmdbResults}))
  };

  return (
    <div className=" pt-[33%] md:pt-[10%]  flex justify-center">
      <form
        className= "bg-black w-full md:w-1/2  flex  justify-between"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-3 w-3/4"
          placeholder={lang[langKey].getGptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="w-48 m-3 p-2 bg-red-700  text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
