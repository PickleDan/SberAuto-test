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
    favoriteHandled(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.movieIds.some(movieId => movieId === id)) {
        state.movieIds = state.movieIds.filter(movieId => movieId !== id);
      } else {
        state.movieIds.push(id);
      }
    },
  },
});

export const {favoriteHandled} = favoritesSlice.actions;
export default favoritesSlice.reducer;
