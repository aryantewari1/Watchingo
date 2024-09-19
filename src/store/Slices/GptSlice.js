import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
  },
  reducers: {
    setShowGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    },
    setGptMovies: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});
export const { setShowGptSearch, setGptMovies } = GptSlice.actions;
export default GptSlice.reducer;
