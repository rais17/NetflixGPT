import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
    name: 'movieInfo',
    initialState: null,
    reducers: {
        addMovieInfo: (state, action) => {
            return action.payload;
        },
    }
});

export const { addMovieInfo } = movieInfoSlice.actions;
export default movieInfoSlice.reducer;