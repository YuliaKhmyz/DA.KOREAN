// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/authSlice';
import Calligraphy, { CalligraphyId } from './types/Calligraphy';
import CalligraphiesState from './types/CalligraphyState';
import * as api from './api';

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
  },
);

export const loadCalligraphies = createAsyncThunk(
  'calligraphies/loadCalligraphies',
  () => api.getCalligraphy(),
);

// export const updateTask = createAsyncThunk(
//   'tasks/updateTask',
//   async (newTask: Task) => {
//     await api.updateTask(newTask);
//     return newTask;
//   },
// );

export const deleteCalligraphy = createAsyncThunk(
  'calligraphies/deleteCalligraphies',
  async (id: CalligraphyId) => {
    await api.deleteCalligraphy(id);
    return id;
  },
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

      // .addCase(updateTask.fulfilled, (state, action) => {
      //   state.tasks = state.tasks.map((task) =>
      //     task.id === action.payload.id ? action.payload : task,
      //   );
      // })

      .addCase(deleteCalligraphy.fulfilled, (state, action) => {
        state.calligraphies = state.calligraphies.filter(
          (callirgaphy) => callirgaphy.id !== action.payload,
        );
      });

    // .addCase(logout.fulfilled, (state) => {
    //   state.calligraphies = [];
    // });
  },
});

// export const { resetError } = tasksSlice.actions;

export default calligraphiesSlice.reducer;
