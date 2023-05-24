/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import { createCalligraphy } from './calligraphiesSlice';

interface FormInput {
  title: string;
  link: string;
  koreantitle: string;
}

function AddCalligraphyForm(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const dispatch = useAppDispatch();
  // const calligraphies = useSelector(selectCalligraphies);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    const dispatchResult = await dispatch(createCalligraphy(data));
    if (createCalligraphy.fulfilled.match(dispatchResult)) {
      reset();
    }
  };
  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Форма добавления прописи</h3>
        <label htmlFor="title-input">
          Название прописи
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input
            type="text"
            placeholder="введите название"
            id="title-input"
            {...register('title')}
          />
        </label>
        <label htmlFor="title-input">
          Корейское название
          <input
            type="text"
            placeholder="корейское название"
            id="koreantitle-input"
            {...register('koreantitle')}
          />
        </label>
        <label htmlFor="link-input">
          Ссылка скачивания
          <input
            type="text"
            placeholder="введите ссылку"
            id="link-input"
            {...register('link')}
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddCalligraphyForm;
