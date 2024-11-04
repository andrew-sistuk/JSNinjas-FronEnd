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

export const addCharacter = createAsyncThunk(
  'characters/addCharacter',
  async (newHero, thunkAPI) => {
    try {
      const result = await axios.post('/characters', newHero, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(result.data.data);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCharacter = createAsyncThunk(
  'characters/updateCharacter',
  async (newHero, thunkAPI) => {
    try {
      const id = newHero._id;
      const response = await axios.patch(`/characters/${id}`, newHero.formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.data.character;
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
