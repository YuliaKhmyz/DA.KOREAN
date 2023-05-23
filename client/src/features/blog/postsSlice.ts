import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PostsState from './types/PostsState';
import * as api from './api';

const initialState: PostsState = {
  posts: [],
};

export const getPosts = createAsyncThunk('posts/loadPosts', () =>
  api.getPosts()
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postsSlice.reducer;
