import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './characters/slice';

export const appState = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});
