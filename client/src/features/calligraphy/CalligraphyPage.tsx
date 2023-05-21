import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { loadCalligraphies } from './calligraphiesSlice';
import { useSelector } from 'react-redux';
import { selectCalligraphies } from './selectors';

function CalligraphyPage() {
  const dispatch = useAppDispatch();
  const calligraphies = useSelector(selectCalligraphies);

  useEffect(() => {
    dispatch(loadCalligraphies());
  }, [dispatch]);

  return (
    <div>
      <h2>Прописи-антистресс</h2>
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
          <p>После тренировки можно принимать коммерческие заказы на дизайн слоганов, постеров, названий товаров, вывесок магазинов, кафе и ресторанов.</p>
          <p>В Корее эта отдельная ниша - именно рукописные варианты чаще всего используют на упаковках.</p>
        </div>
      </div>

      <div>
        {calligraphies.map((calligraphy) => (
          <div key={calligraphy.id}>
            <h4>{calligraphy.title}</h4>
            <button>
              <a href={calligraphy.link}>Купить</a>
            </button>
          </div>
        ))}
      </div>

      <form>
        <h3>Форма добавления прописи</h3>
        <label htmlFor="title-input">
          <input type="text" placeholder="введите название" id="title-input" />
        </label>
        <label htmlFor="link-input">
          <input type="text" placeholder="введите ссылку" id="link-input" />
        </label>
        <button>Добавить</button>
      </form>
    </div>
  );
}

export default CalligraphyPage;
