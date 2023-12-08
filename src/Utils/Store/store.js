import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/userSlice";
import moviesSlice from "../Slices/moviesSlice";
import backGroundVideoSlice from "../Slices/backGroundVideoSlice";
import movieInfoSlice from "../Slices/movieInfoSlice";
import searchMovieSlice from "../Slices/searchMovieSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    backGroundVideo: backGroundVideoSlice,
    movieInfo: movieInfoSlice,
    searchMovie: searchMovieSlice
  },
});

export default store;