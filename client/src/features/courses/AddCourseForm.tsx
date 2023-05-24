/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createCourse } from './coursesSlice';
import { useAppDispatch } from '../../store';
import './addCourseForm.css';
import Section from '../../Components/Section/Section';
import { Container } from 'react-bootstrap';

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
    <Section>
      <Container className="addform-container">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="addform" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="addform-title">Форма добавления курса</h3>
          <label htmlFor="main_title" className="form-label">
            {' '}
            Название курса
            <textarea
              id="main_title"
              placeholder="главное название"
              {...register('main_title')}
            />
          </label>
          <label htmlFor="main_description" className="form-label">
            Описание курса для главной страницы
            <textarea
              id="main_description"
              placeholder="главное описание"
              {...register('main_description')}
            />
          </label>
          <label htmlFor="start_title" className="form-label">
            Начало курса
            <textarea
              id="start_title"
              placeholder="начало курса"
              {...register('start_title')}
            />
          </label>
          <label htmlFor="start_description" className="form-label">
            Длительность
            <textarea
              id="start_description"
              placeholder="комментарии по длительности"
              {...register('start_description')}
            />
          </label>
          <label htmlFor="condition_title" className="form-label">
            Описание условий
            <textarea
              id="condition_title"
              placeholder="заголовок для описания условий"
              {...register('condition_title')}
            />
          </label>
          <label htmlFor="condition_description" className="form-label">
            Комментарии
            <textarea
              id="condition_description"
              placeholder="комментарии по условиям"
              {...register('condition_description')}
            />
          </label>
          <label htmlFor="price_title" className="form-label">
            Заголовок для блока стоимости
            <textarea
              id="price_title"
              placeholder="заголовок стоимости"
              {...register('price_title')}
            />
          </label>
          <label htmlFor="price" className="form-label">
            Стоимость
            <textarea
              id="price"
              placeholder="стоимость"
              {...register('price')}
            />
          </label>
          <button type="submit" className="addform-btn">
            Добавить курс
          </button>
        </form>
      </Container>
    </Section>
  );
}

export default AddCourseForm;
