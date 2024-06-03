import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./moviesSlice";
import SearchReducer from "./SearchSlice";
import FavoritesReducer from "./FavoritesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const rootReducer = combineReducers({
  user: userSlice,
  movies: moviesReducer,
  search: SearchReducer,
  favorite: FavoritesReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default appStore;
