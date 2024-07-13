import { createSlice } from "@reduxjs/toolkit";




const moviesSlice = createSlice(
    {
         name: "movies",
         initialState : {
                  nowPlayingMovies : null,
                  PopularMovies: null,
                  UpcomingMovies: null,
                  trailerVideo: null,
         },

         reducers: {
          addnowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
          },
          addPopularMovies : (state, action) => {
            state.PopularMovies = action.payload;
          },
          addUpcomingMovies : (state, action) => {
            state.UpcomingMovies = action.payload;
          },
          addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },

         }
    }
)

export default moviesSlice.reducer;
export const{addnowPlayingMovies, addTrailerVideo,addPopularMovies,addUpcomingMovies} = moviesSlice.actions;