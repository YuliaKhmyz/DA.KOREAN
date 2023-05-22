// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CalligraphiesState from './types/CalligraphyState';
import * as api from './api';

const initialState: CalligraphiesState = {
  calligraphies: [],
};

export const getMyCalligraphies = createAsyncThunk(
  'calligraphies/loadCalligraphies',
  () => api.getCalligraphies()
);

const userPageSlice = createSlice({
  name: 'calligraphies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyCalligraphies.fulfilled, (state, action) => {
      state.calligraphies = action.payload;
    });
  },
});

export default userPageSlice.reducer;
