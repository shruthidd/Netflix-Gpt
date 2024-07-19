import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({

    name: 'gpt',
    initialState: {
        showgptSearch: false,
        //tmdbMovies:null,
        GptMovieNames:null,
        TmdbMovieResults: null,
    },

    reducers: {
        toggleGptSearchView : (state) => {
            state.showgptSearch = !state.showgptSearch;
        },



        addTmdbGptResults : (state, action) => {
           const {GptMovieNames, TmdbMovieResults} = action.payload;
            state.TmdbMovieResults = TmdbMovieResults;
            state.GptMovieNames = GptMovieNames;
        },

    },
});

export default gptSlice.reducer;
export const {toggleGptSearchView, addTmdbGptResults} = gptSlice.actions