
import { createSlice } from "@reduxjs/toolkit";
const FavoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favMovies: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const movieToAdd = action.payload;
      const existingMovie = state.favMovies.find(
        (movie) => movie.id === movieToAdd.id
      );
      if (!existingMovie) {
        state.favMovies.push(movieToAdd);
      }
    },
    removeToFavorites: (state, action) => {
      const movieToRemoveId = action.payload;
      state.favMovies = state.favMovies.filter(
        (movie) => movie.id !== movieToRemoveId
      );
    },
  },
});
export const { addToFavorites, removeToFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;