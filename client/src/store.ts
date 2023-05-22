import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './features/auth/authSlice';
import calligraphiesSlice from './features/calligraphy/calligraphiesSlice';
import coursesSlice from './features/courses/coursesSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    calligraphies: calligraphiesSlice,
    courses: coursesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
