import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import movieReducer from "./Slices/movieSlice";
import GptReducer from "./Slices/GptSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    GPT: GptReducer,
  },
});

export default appStore;
