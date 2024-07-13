import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({

    name: 'gpt',
    initialState: {
        showgptSearch: false,
    },

    reducers: {
        toggleGptSearchView : (state) => {
            state.showgptSearch = !state.showgptSearch;
        },

    },
});

export default gptSlice.reducer;
export const {toggleGptSearchView} = gptSlice.actions