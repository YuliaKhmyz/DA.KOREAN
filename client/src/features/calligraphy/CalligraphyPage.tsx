/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import {
  loadCalligraphies,
  createCalligraphy,
  deleteCalligraphy,
  updateCalligraphy,
} from './calligraphiesSlice';
import { selectCalligraphies } from './selectors';
import { CalligraphyId, Calligraphy } from './types/Calligraphy';
import './calligraphyPage.css';
import CalligraphyItem from './CalligraphyItem';
import ChangeCalligraphyItem from './ChangeCalligraphyItem';

interface FormInput {
  title: string;
  link: string;
  koreantitle: string;
}

function CalligraphyPage(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const dispatch = useAppDispatch();
  const calligraphies = useSelector(selectCalligraphies);
  // const [showForm, setShowForm] = useState(false);
  const [elementId, setElementId] = useState<null | number>(null);
  const [changeKoreanTitle, setChangeKoreanTitle] = useState('');
  const [changeTitle, setChangechangeTitle] = useState('');
  const [changeLink, setChangeLink] = useState('');

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data);
    const dispatchResult = await dispatch(createCalligraphy(data));
    if (createCalligraphy.fulfilled.match(dispatchResult)) {
      reset();
    }
  };

  const handleDelete = (id: CalligraphyId): void => {
    dispatch(deleteCalligraphy(id));
    console.log(id);
  };

  const handleUpdate = (newCalligraphy: Calligraphy): void => {
    console.log(newCalligraphy);

    // dispatch(updateCalligraphy(newCalligraphy));
    // console.log('update');
  };

  const addInput = (id: CalligraphyId): void => {
    calligraphies.filter((calligraphy) => {
      if (calligraphy.id === id) {
        console.log('id', id);
        // setShowForm((prev) => !prev);
        setElementId(id);
      }
    });
  };

  useEffect(() => {
    dispatch(loadCalligraphies());
  }, [dispatch]);
  console.log(calligraphies);

  return (
    <div>
      <h2>Прописи-антистресс</h2>
      <div>
        <p>
          Когда пишешь СЛОВО, поневоле проникаешься смыслом, впитываешь посыл
          руками, глазами, умом и душой. А смысл в надписях всегда глубокий и
          мотивирующий. Не думаешь о мелочах, списке продуктов и засохшем
          цветке. Тело и мозг заземляются, отключаясь от привычной работы.
        </p>
        <p>
          Прописывание букв иностранного алфавита сделает слова “своими”, а язык
          ближе на уровне тела и визуала. Даже без знания корейского языка можно
          создать красивую открытку. Процесс подготовки занимает мало времени,
          но выглядит как обряд инициации перед переходом в другое состояние.
          Удовольствие от раскладывания кистей, ручек, бумаги и фломастеров
          обеспечено.
        </p>
      </div>

      <h4>Практическая польза от занятий каллиграфией</h4>

      <div>
        На выходе получается арт-объект с кучей способов применения. Его можно:
        <ul>
          <li>подарить другу, интересующемуся Кореей</li>
          <li>дополнить любой подарок для уникальности и экзотики </li>
          <li>повесить на стену </li>
          <li>отправить по настоящей почте</li>
          <li>приклеить на мудборд и мотивироваться каждый день</li>
          <li>составить собственный календарь</li>
          <li>украсить пенал, эко-сумку или даже майку</li>
        </ul>
        <div>
          <p>
            После тренировки можно принимать коммерческие заказы на дизайн
            слоганов, постеров, названий товаров, вывесок магазинов, кафе и
            ресторанов.
          </p>
          <p>
            В Корее эта отдельная ниша - именно рукописные варианты чаще всего
            используют на упаковках.
          </p>
        </div>
      </div>

      <div>
        {calligraphies.map((calligraphy) => (
          <div key={calligraphy.id}>
            <CalligraphyItem calligraphy={calligraphy} />
          </div>
        ))}
      </div>

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
      <h3>Список каллиграфий для админа</h3>

      <div>
        {calligraphies.map((calligraphy) => (
          <div key={calligraphy.id}>
            <ChangeCalligraphyItem
              calligraphy={calligraphy}
              handleDelete={() => handleDelete(calligraphy.id)}
              handleUpdate={() => handleUpdate(calligraphy)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalligraphyPage;
