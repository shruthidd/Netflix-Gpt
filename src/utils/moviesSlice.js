import { createSlice } from "@reduxjs/toolkit";




const moviesSlice = createSlice(
    {
         name: "movies",
         initialState : {
                  nowPlayingMovies : null,
                  trailerVideo: null,
         },

         reducers: {
          addnowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
          },
          addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },

         }
    }
)

export default moviesSlice.reducer;
export const{addnowPlayingMovies, addTrailerVideo} = moviesSlice.actions;