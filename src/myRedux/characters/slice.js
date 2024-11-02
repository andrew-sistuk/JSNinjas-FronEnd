import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacter, fetchCharacters } from './operations';

const defaultProperties = state => {
  state.items = [];
  state.page = 1;
  state.perPage = 5;
  state.totalItems = 0;
  state.totalPages = 0;
  state.hasNextPage = false;
  state.hasPreviousPage = false;
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
    page: 1,
    perPage: 5,
    totalItems: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, handlePending)
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPreviousPage = action.payload.hasPreviousPage;
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
