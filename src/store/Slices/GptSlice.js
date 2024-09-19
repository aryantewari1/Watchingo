import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    setShowGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    },
  },
});
export const { setShowGptSearch } = GptSlice.actions;
export default GptSlice.reducer;
