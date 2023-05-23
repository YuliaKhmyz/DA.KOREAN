// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/authSlice';
import { CourseId, Course } from './types/Course';
import CoursesState from './types/CourseState';
import * as api from './api';

const initialState: CoursesState = {
  courses: [],
};

export const createCourse = createAsyncThunk(
  'courses/createCourse',
  async ({
    main_title,
    main_description,
    start_title,
    start_description,
    condition_title,
    condition_description,
    price_title,
    price,
  }: {
    main_title: string;
    main_description: string;
    start_title: string;
    start_description: string;
    condition_title: string;
    condition_description: string;
    price_title: string;
    price: number;
  }) => {
    if (!main_title.trim() || !main_description.trim()) {
      throw new Error('Заполните все поля');
    }
    return api.createCourse(
      main_title,
      main_description,
      start_title,
      start_description,
      condition_title,
      condition_description,
      price_title,
      price,
    );
  },
);
export const loadCourses = createAsyncThunk('courses/loadCourses', () =>
  api.getCourse(),
);

export const updateCourse = createAsyncThunk(
  'courses/updateCourse',
  async (newCourse: Course) => {
    await api.updateCourse(newCourse);
    return newCourse;
  },
);

export const deleteCourse = createAsyncThunk(
  'courses/deleteCourse',
  async (id: CourseId) => {
    await api.deleteCourse(id);
    return id;
  },
);

// export const buyCalligraphy = createAsyncThunk(
//   'calligraphies/buyCalligraphy',
//   async (id: CalligraphyId) => {
//     await api.buyCalligraphy(id);
//     return id;
//   }
// );

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })

      .addCase(loadCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })

      .addCase(updateCourse.fulfilled, (state, action) => {
        state.courses = state.courses.map((course) =>
          course.id === action.payload.id ? action.payload : course,
        );
      })

      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(
          (course) => course.id !== action.payload,
        );
      });

    // .addCase(logout.fulfilled, (state) => {
    //   state.calligraphies = [];
    // });
  },
});

// export const { resetError } = tasksSlice.actions;

export default coursesSlice.reducer;
