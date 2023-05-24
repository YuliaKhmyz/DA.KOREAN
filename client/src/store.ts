import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import calligraphiesSlice from './features/calligraphy/calligraphiesSlice';
import authSlice from './features/auth/authSlice';
import postsSlice from './features/blog/postsSlice';
import coursesSlice from './features/courses/coursesSlice';
import userPageSlice from './features/userpage/userPageSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    calligraphies: calligraphiesSlice,
    courses: coursesSlice,
    mycalligraphies: userPageSlice,
    posts: postsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
