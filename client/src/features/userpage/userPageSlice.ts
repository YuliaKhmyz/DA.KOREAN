// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserPageState from './types/UserPageState';
import * as api from './api';

const initialState: UserPageState = {
  calligraphies: [],
  posts: [],
  photo: '',
};

export const getMyCalligraphies = createAsyncThunk(
  'calligraphies/loadMyCalligraphies',
  () => api.getMyCalligraphies()
);

export const uploadPhoto = createAsyncThunk('photo/add', (action: any) =>
  api.loadPhoto(action)
);

const userPageSlice = createSlice({
  name: 'calligraphies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyCalligraphies.fulfilled, (state, action) => {
        state.calligraphies = action.payload;
      })
      .addCase(uploadPhoto.fulfilled, (state, action) => {
        state.photo = action.payload;
      });
  },
});

export default userPageSlice.reducer;
