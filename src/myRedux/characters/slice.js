import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCharacters,
  fetchCharacter,
  deleteCharacter,
  addCharacter,
  updateCharacter,
  deleteCharacterImg,
} from './operations';
import { toast } from 'react-toastify';

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

const handlePendingItem = state => {
  state.loading = true;
};
const handleRejectedItem = (state, action) => {
  state.error = action.payload;
  state.loading = false;
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

      .addCase(addCharacter.pending, handlePendingItem)
      .addCase(addCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // state.item = action.payload;
        toast(`Add new character ${action.payload.nickname}`);
      })
      .addCase(addCharacter.rejected, handleRejectedItem)

      .addCase(updateCharacter.pending, handlePendingItem)
      .addCase(updateCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload;
        toast(`Update ${action.payload.nickname} character`);
      })
      .addCase(updateCharacter.rejected, handleRejectedItem)

      .addCase(deleteCharacterImg.pending, handlePendingItem)
      .addCase(deleteCharacterImg.fulfilled, state => {
        state.loading = false;
        state.error = null;
        toast(`Delete img`);
      })
      .addCase(deleteCharacterImg.rejected, handleRejectedItem)

      .addCase(deleteCharacter.pending, handlePending)
      .addCase(deleteCharacter.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.item = {};
        toast(`Complete delete character`);
      })
      .addCase(deleteCharacter.rejected, handleRejected);
  },
});

export default charactersSlice.reducer;
