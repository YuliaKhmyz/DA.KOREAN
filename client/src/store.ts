import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './features/auth/authSlice';
import calligraphiesSlice from './features/calligraphy/calligraphiesSlice';
import userPageSlice from './features/userpage/userPageSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    calligraphies: calligraphiesSlice,
    mycalligraphies: userPageSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
