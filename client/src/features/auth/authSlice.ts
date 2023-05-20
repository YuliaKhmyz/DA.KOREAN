import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';
import Credentials from './types/Credentials';
import * as api from './api';
import RegisterData from './types/RegisterData';

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  loginFormError: undefined,
  registerFormError: undefined,
};

export const getUser = createAsyncThunk('auth/check', () => api.user());

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials) => {
    if (!credentials.email.trim() || !credentials.password.trim()) {
      throw new Error('Заполнены не все поля');
    }

    return api.login(credentials);
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: RegisterData) => {
    if (data.password !== data.password2) {
      throw new Error('Пароли не совпадают');
    }

    if (!data.email.trim() || !data.password.trim()) {
      throw new Error('Заполнены не все поля');
    }

    return api.register(data);
  }
);

export const logout = createAsyncThunk('auth/logout', api.logout);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 332 редьюсер для очистки ошибки
    resetLoginFormError: (state) => {
      state.loginFormError = undefined;
    },
    resetRegisterFormError: (state) => {
      state.registerFormError = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.authChecked = action.payload.isLoggedIn;
        state.user = action.payload.isLoggedIn
          ? action.payload.user
          : undefined;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authChecked = Boolean(action.payload);
        state.loginFormError = undefined;
      })

      .addCase(login.rejected, (state, action) => {
        state.loginFormError = action.error.message;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
        state.authChecked = false;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authChecked = Boolean(action.payload);
        state.registerFormError = undefined;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerFormError = action.error.message;
      });
  },
});

export const { resetLoginFormError, resetRegisterFormError } =
  authSlice.actions;

export default authSlice.reducer;
