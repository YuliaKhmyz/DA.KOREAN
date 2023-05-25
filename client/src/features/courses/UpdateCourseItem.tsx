/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Course, CourseId } from './types/Course';
import { useAppDispatch } from '../../store';
import { deleteCourse, updateCourse } from './coursesSlice';

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
    setShow((prev) => !prev);
  };

  return (
    <div>
      <h2>{course.main_title}</h2>
      <h3>{course.start_title}</h3>
      <div>{course.start_description}</div>
      <h3>{course.condition_title}</h3>
      <div>{course.condition_description}</div>
      <h3>{course.price_title}</h3>
      <div>{course.price}</div>

      <button type="submit" onClick={() => handledelete(course.id)}>
        Удалить
      </button>

      {!show ? (
        <div>
          <button type="submit" onClick={handleShowForm}>
            Редактировать
          </button>
        </div>
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            defaultValue={course.main_title}
            {...register('main_title')}
          />
          <textarea
            defaultValue={course.main_description}
            {...register('main_description')}
          />
          <textarea
            defaultValue={course.start_title}
            {...register('start_title')}
          />
          <textarea
            defaultValue={course.start_description}
            {...register('start_description')}
          />
          <textarea
            defaultValue={course.condition_title}
            placeholder="заголовок для описания условий"
            {...register('condition_title')}
          />
          <textarea
            defaultValue={course.condition_description}
            {...register('condition_description')}
          />
          <textarea
            defaultValue={course.price_title}
            {...register('price_title')}
          />
          <textarea defaultValue={course.price} {...register('price')} />
          <button type="submit">Сохранить изменения</button>
        </form>
      )}
    </div>
  );
}

export default UpdateCourseItem;
