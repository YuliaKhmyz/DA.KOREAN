/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Course, CourseId } from './types/Course';
import { useAppDispatch } from '../../store';
import { deleteCourse, updateCourse } from './coursesSlice';
import './coursePageItem.css';
import './UpdateCourseItem.css';
import { separateNumbers } from '../../utils/utils';

function UpdateCourseItem({ course }: { course: Course }): JSX.Element {
  const dispatch = useAppDispatch();

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

  const { register, handleSubmit, reset } = useForm<FormInput>();

  const [show, setShow] = useState(false);

  const handledelete = (id: CourseId): void => {
    console.log('click', id);
    dispatch(deleteCourse(id));
  };

  const handleShowForm = (): void => {
    setShow((prev) => !prev);
  };

  function handleUpdate(newCourse: Course): Course {
    return newCourse;
  }
  const cangedItem = handleUpdate(course);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(cangedItem.id);

    console.log(data);

    const dispatchResult = await dispatch(
      updateCourse({
        id: cangedItem.id,
        main_title: data.main_title,
        main_description: data.main_description,
        start_title: data.start_title,
        start_description: data.start_description,
        condition_title: data.condition_title,
        condition_description: data.condition_description,
        price_title: data.price_title,
        price: data.price,
        type: cangedItem.type,
      }),
    );
    console.log(dispatchResult);

    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="middle-column column change">
        <h2 className="main-title">{course.main_title}</h2>
        <h3 className="start-title">{course.start_title}</h3>
        <div className="start-description">{course.start_description}</div>

        <h3 className="condition-title">{course.condition_title}</h3>
        <div className="condition-description">
          {course.condition_description}
        </div>

        <h3 className="price-title">{course.price_title}</h3>
        <div className="price">{separateNumbers(course.price)} Р</div>

        <Button
          type="submit"
          variant="outline-secondary"
          className="course-delete"
          onClick={() => handledelete(course.id)}
        >
          Удалить
        </Button>
        {!show && (
          <Button
            type="submit"
            variant="outline-secondary"
            className="course-update"
            onClick={handleShowForm}
          >
            Редактировать
          </Button>
        )}
      </div>

      {show && (
        <Container className="addform-container">
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(onSubmit)} className="addform">
            <label htmlFor="main_title" className="form-label">
              {' '}
              Название курса
              <textarea
                id="main_title"
                defaultValue={course.main_title}
                {...register('main_title')}
              />
            </label>
            <label htmlFor="main_description" className="form-label">
              Описание курса для главной страницы
              <textarea
                id="main_description"
                defaultValue={course.main_description}
                {...register('main_description')}
              />
            </label>
            <label htmlFor="start_title" className="form-label">
              Начало курса
              <textarea
                id="start_title"
                defaultValue={course.start_title}
                {...register('start_title')}
              />
            </label>
            <label htmlFor="start_description" className="form-label">
              Длительность
              <textarea
                id="start_description"
                defaultValue={course.start_description}
                {...register('start_description')}
              />
            </label>
            <label htmlFor="condition_title" className="form-label">
              Описание условий
              <textarea
                id="condition_title"
                defaultValue={course.condition_title}
                {...register('condition_title')}
              />
            </label>

            <label htmlFor="condition_description" className="form-label">
              Комментарии
              <textarea
                id="condition_description"
                defaultValue={course.condition_description}
                {...register('condition_description')}
              />
            </label>
            <label htmlFor="price_title" className="form-label">
              Заголовок для блока стоимости
              <textarea
                id="price_title"
                defaultValue={course.price_title}
                {...register('price_title')}
              />
            </label>
            <label htmlFor="price" className="form-label">
              Стоимость
              <textarea
                id="price"
                defaultValue={course.price}
                {...register('price')}
              />
            </label>
            <button type="submit" className="addform-btn">
              Сохранить изменения
            </button>
          </form>
        </Container>
      )}
    </>
  );
}

export default UpdateCourseItem;
