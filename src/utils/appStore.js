import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configueReducer from "./configueSlice";

const appStore = configureStore({
reducer: {
user: userReducer,
movies: moviesReducer,
gpt: gptReducer,
config: configueReducer,

},



});

export default appStore;