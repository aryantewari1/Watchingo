import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
