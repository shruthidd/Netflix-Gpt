import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/langauageConstants"

const GptSearchBar = () => {

const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[10%]  flex justify-center">
      <form className="bg-black w-1/2  flex  justify-between">
        <input
          type="text"
          className="p-2 m-3 w-3/4"
          placeholder= {lang[langKey].getGptSearchPlaceholder}
        />
        <button className="w-48 m-3 p-2 bg-red-700  text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
