/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap';
import { useAppDispatch } from '../../store';
import { createCalligraphy } from './calligraphiesSlice';
import './addCalligraphyForm.css';
import Section from '../../Components/Section/Section';

interface FormInput {
  title: string;
  link: string;
  koreantitle: string;
  price: number;
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
    <Container className="addform-container">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="addform" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="addform-title">Форма добавления прописи</h3>
        <label htmlFor="title-input" className="form-label">
          Название прописи
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input
            type="text"
            placeholder="введите название"
            id="title-input"
            {...register('title')}
          />
        </label>
        <label htmlFor="title-input" className="form-label">
          Корейское название
          <input
            type="text"
            placeholder="корейское название"
            id="koreantitle-input"
            {...register('koreantitle')}
          />
        </label>
        <label htmlFor="link-input" className="form-label">
          Ссылка скачивания
          <input
            type="text"
            placeholder="введите ссылку"
            id="link-input"
            {...register('link')}
          />
        </label>
        <label htmlFor="link-input" className="form-label">
          Цена
          <input
            type="text"
            placeholder="стоимость каллиграфии"
            id="link-input"
            {...register('price')}
          />
        </label>
        <button type="submit" className="addform-btn">
          Добавить
        </button>
      </form>
    </Container>
  );
}

export default AddCalligraphyForm;
