import { createSlice } from "@reduxjs/toolkit";

const backGroundVideoSlice = createSlice({
  name: "backGroundVideo",
  initialState: {
    homeBackGroundVideo: null,
    movieBackGroundVideo: null,
    allVideos: null,
  },
  reducers: {
    addHomeBackGroundVideo: (state, action) => {
      state.homeBackGroundVideo = action.payload;
    },
    addMovieBackGroundVideo: (state, action) => {
      state.movieBackGroundVideo = action.payload;
    },
    addAllVideo: (state, action) => {
      state.allVideos = action.payload;
    }
  },
});

export const { addHomeBackGroundVideo, addMovieBackGroundVideo, addAllVideo } =
  backGroundVideoSlice.actions;
export default backGroundVideoSlice.reducer;
