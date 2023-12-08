import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState: {
    searchQuery: [],
    searchedMovies: null,
    errMsg: null,
    toggleSearch: true
  },
  reducers: {
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    addSearchedQuery: (state, action) => {
      state.searchQuery = action.payload;
      },
      toggleSearchBar: (state, action) => {
          state.toggleSearch = action.payload;
    },
    removeSearchMovie: (state) => {
      state.searchedMovies = null;
    },
    addErrMsg: (state, action) => {
      state.errMsg = action.payload;
    }
  },
});

export const {
  addSearchedMovies,
  addSearchedQuery,
  toggleSearchBar,
  removeSearchMovie,
  addErrMsg,
} = searchMovieSlice.actions;
export default searchMovieSlice.reducer;