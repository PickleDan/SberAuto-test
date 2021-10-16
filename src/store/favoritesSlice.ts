import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
    addedToFavorites(state, action: PayloadAction<string>) {
      state.movieIds.push(action.payload);
    },
    removedFromFavorites(state, action: PayloadAction<string>) {
      state.movieIds = state.movieIds.filter(
        movieId => movieId !== action.payload,
      );
    },
  },
});

export const {addedToFavorites, removedFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;
