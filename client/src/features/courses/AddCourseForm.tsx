/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createCourse } from './coursesSlice';
import { useAppDispatch } from '../../store';

interface FormInput {
  main_title: string;
  main_description: string;
  start_title: string;
  start_description: string;
  condition_title: string;
  condition_description: string;
  price_title: string;
  price: number;
}

function AddCourseForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    const dispatchresult = await dispatch(createCourse(data));
    if (createCourse.fulfilled.match(dispatchresult)) {
      reset();
    }
  };

  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="главное название"
          {...register('main_title')}
        />
        <input
          type="text"
          placeholder="главное описание"
          {...register('main_description')}
        />
        <input placeholder="начало курса" {...register('start_title')} />
        <input
          placeholder="комментарии по длительности"
          {...register('start_description')}
        />
        <input
          placeholder="заголовок для описания условий"
          {...register('condition_title')}
        />
        <input
          placeholder="комментарии по условиям"
          {...register('condition_description')}
        />
        <input placeholder="заголовок стоимости" {...register('price_title')} />
        <input placeholder="стоимость" {...register('price')} />
        <button type="submit">Добавить курс</button>
      </form>
    </div>
  );
}

export default AddCourseForm;
