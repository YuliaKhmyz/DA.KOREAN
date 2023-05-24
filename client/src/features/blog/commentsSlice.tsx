// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import CommentsState from './types/CommentsState';
// import * as api from './api';

// const initialState: CommentsState = {
//   comments: [],
// };

// export const getComments = createAsyncThunk('comments/loadComments', () =>
//   api.getComments()
// );

// export const createComment = createAsyncThunk(
//   'comments/createComment',
//   async ({ comment: string }: { comment: string }) => {
//     if (!comment.trim()) {
//       throw new Error('Заполните все поля');
//     }
//     return api.createComment(comment);
//   }
// );

// const commentsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getComments.fulfilled, (state, action) => {
//       state.comments = action.payload;
//     });
//   },
// });

// export default commentsSlice.reducer;

export {};
