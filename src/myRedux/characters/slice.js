import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacters, fetchCharacter, deleteCharacter } from './operations';

const defaultProperties = state => {
  state.items = [];
  state.item = {};
  state.totalPages = 0;
};

const handlePending = state => {
  state.loading = true;
  defaultProperties(state);
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.loading = false;
  defaultProperties(state);
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    item: {},
    totalPages: 0,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, handlePending)
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCharacters.rejected, handleRejected)

      .addCase(fetchCharacter.pending, handlePending)
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchCharacter.rejected, handleRejected)
      .addCase(deleteCharacter.pending, handlePending)
      .addCase(deleteCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = {};
      })
      .addCase(deleteCharacter.rejected, handleRejected);
  },
});

export default charactersSlice.reducer;
