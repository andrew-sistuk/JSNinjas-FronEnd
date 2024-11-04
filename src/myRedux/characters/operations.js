import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsninjas-backend.onrender.com';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('/characters', {
        params: {
          page,
        },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCharacter = createAsyncThunk(
  'characters/fetchCharacter',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/characters/${id}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCharacter = createAsyncThunk(
  'characters/deleteCharacter',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/characters/${id}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
