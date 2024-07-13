import { createSlice } from "@reduxjs/toolkit";

const configueSlice = createSlice( {
 name: "config",
 initialState: {
      lang: "en",
 },
 reducers : {
    changeLanguage: (state, action) => {
        state.lang = action.payload;
    }
 },



})

export default configueSlice.reducer;
export const {changeLanguage} =configueSlice.actions;