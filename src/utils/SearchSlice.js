import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    movieResults: null,
    movieNames: null,
    searchResults: null,
    movieDetails: null,
    watchMovieDetails: null,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addWatchMovieDetails: (state, action) => {
      state.watchMovieDetails = action.payload;
    },
  },
});

export const {
  toggleSearchView,
  addSearchResults,
  addMovieDetails,
  addWatchMovieDetails,
} = SearchSlice.actions;
export default SearchSlice.reducer;
