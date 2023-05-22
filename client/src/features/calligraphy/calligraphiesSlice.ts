// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/authSlice';
import Calligraphy, { CalligraphyId } from './types/Calligraphy';
import CalligraphiesState from './types/CalligraphyState';
import * as api from './api';

const initialState: CalligraphiesState = {
  calligraphies: [],
};

export const loadCalligraphies = createAsyncThunk(
  'calligraphies/loadCalligraphies',
  () => api.getCalligraphy()
);

export const deleteCalligraphy = createAsyncThunk(
  'calligraphies/deleteCalligraphies',
  async (id: CalligraphyId) => {
    await api.getCalligraphy();
    return id;
  }
);

export const buyCalligraphy = createAsyncThunk(
  'calligraphies/buyCalligraphy',
  async (id: CalligraphyId) => {
    await api.buyCalligraphy(id);
    return id;
  }
);

const calligraphiesSlice = createSlice({
  name: 'calligraphies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(loadCalligraphies.fulfilled, (state, action) => {
        state.calligraphies = action.payload;
      })

      .addCase(deleteCalligraphy.fulfilled, (state, action) => {
        state.calligraphies = state.calligraphies.filter(
          (callirgaphy) => callirgaphy.id !== action.payload
        );
      })

      .addCase(logout.fulfilled, (state) => {
        state.calligraphies = [];
      });
  },
});

// export const { resetError } = tasksSlice.actions;

export default calligraphiesSlice.reducer;
