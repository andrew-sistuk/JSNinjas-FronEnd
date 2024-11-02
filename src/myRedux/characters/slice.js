import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacter, fetchCharacters } from './operations';

const defaultProperties = state => {
  state.items = [];
  state.item = {};
  state.totalPages = 1;
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
    totalPages: 1,
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
      .addCase(fetchCharacter.rejected, handleRejected);
  },
});

export default charactersSlice.reducer;
