import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';

const initialState = {
  email: '',
};

export const sendNews = createAsyncThunk(
  'news/sendNews',
  async (email: string) => {
    if (!email) {
      throw new Error('Введите адрес электронной почты');
    }

    return api.getEmail(email);
  }
);

const newsSubscribeFormSlice = createSlice({
  name: 'newsSubscribe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendNews.fulfilled, (state, action) => {
      state.email = action.payload;
    });
  },
});

export default newsSubscribeFormSlice.reducer;
