// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CalligraphyId, Calligraphy } from './types/Calligraphy';
import CalligraphiesState from './types/CalligraphyState';
import * as api from './api';
import { useAppDispatch } from '../../store';
import { getMyCalligraphies } from '../userpage/userPageSlice';

const initialState: CalligraphiesState = {
  calligraphies: [],
};

export const createCalligraphy = createAsyncThunk(
  'calligraphies/createCalligraphy',
  async ({
    title,
    link,
    koreantitle,
  }: {
    title: string;
    link: string;
    koreantitle: string;
  }) => {
    if (!title.trim() || !link.trim() || !koreantitle.trim()) {
      throw new Error('Заполните все поля');
    }
    return api.createCalligraphy(title, link, koreantitle);
  }
);

export const loadCalligraphies = createAsyncThunk(
  'calligraphies/loadCalligraphies',
  () => api.getCalligraphy()
);

export const updateCalligraphy = createAsyncThunk(
  'calligraphies/updateCalligraphy',
  async (newCalligraphy: Calligraphy) => {
    await api.updateCalligraphy(newCalligraphy);
    return newCalligraphy;
  }
);

export const deleteCalligraphy = createAsyncThunk(
  'calligraphies/deleteCalligraphy',
  async (id: CalligraphyId) => {
    await api.deleteCalligraphy(id);
    return id;
  }
);

export const buyCalligraphy = createAsyncThunk(
  'calligraphies/buyCalligraphy',
  async (id: CalligraphyId) => {
    await api.buyCalligraphy(id);
    const dispatch = useAppDispatch();
    dispatch(getMyCalligraphies());
    return id;
  }
);

const calligraphiesSlice = createSlice({
  name: 'calligraphies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createCalligraphy.fulfilled, (state, action) => {
        state.calligraphies.push(action.payload);
      })

      .addCase(loadCalligraphies.fulfilled, (state, action) => {
        state.calligraphies = action.payload;
      })

      .addCase(updateCalligraphy.fulfilled, (state, action) => {
        state.calligraphies = state.calligraphies.map((calligraphy) =>
          calligraphy.id === action.payload.id ? action.payload : calligraphy
        );
      })

      .addCase(deleteCalligraphy.fulfilled, (state, action) => {
        state.calligraphies = state.calligraphies.filter(
          (callirgaphy) => callirgaphy.id !== action.payload
        );
      });

    // .addCase(logout.fulfilled, (state) => {
    //   state.calligraphies = [];
    // });
  },
});

// export const { resetError } = tasksSlice.actions;

export default calligraphiesSlice.reducer;
