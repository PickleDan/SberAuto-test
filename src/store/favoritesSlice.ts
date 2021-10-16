import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {storeFavoriteMovies} from '@store/asyncStorage';

type FavoritesState = {
  movieIds: string[];
};

const initialState: FavoritesState = {
  movieIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favoritesInitialized(state, action: PayloadAction<string[]>) {
      state.movieIds = action.payload;
    },
    favoriteHandled(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.movieIds.some(movieId => movieId === id)) {
        state.movieIds = state.movieIds.filter(movieId => movieId !== id);
        storeFavoriteMovies(state.movieIds).then();
      } else {
        state.movieIds.push(id);
        storeFavoriteMovies(state.movieIds).then();
      }
    },
  },
});

export const {favoriteHandled, favoritesInitialized} = favoritesSlice.actions;
export default favoritesSlice.reducer;
