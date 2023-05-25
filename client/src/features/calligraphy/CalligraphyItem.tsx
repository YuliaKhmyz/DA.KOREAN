import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Calligraphy, CalligraphyId } from './types/Calligraphy';

// можно попробовать замутить функцию со switch..case чтобы на выходе получилась строка
// с абсолютным путём до конкретной картинки

// import koreanSpringBg from '/images/korean_autumn_bg.jpg';
import koreanSpringBg from './korean_spring_bg.jpg';
import koreanSummerBg from './korean_summer_bg.jpg';
import koreanAutumnBg from './korean_autumn_bg.jpg';
import koreanWinterBg from './korean_winter_bg.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from '../auth/selectors';

function CalligraphyItem({
  calligraphy,
  handleBuyCalligraphy,
}: {
  calligraphy: Calligraphy;
  handleBuyCalligraphy: (id: CalligraphyId) => void;
}): JSX.Element {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const images = [
    koreanSpringBg,
    koreanSummerBg,
    koreanAutumnBg,
    koreanWinterBg,
  ];

  return (
    <>
      <div className="calligraphy-image-wrapper">
        <img
          src={images[calligraphy.id - 1]}
          alt="осень в Корее"
          className="calligraphy-bg-image"
        />
        <div className="calligraphy-corean-title">
          {calligraphy.koreantitle}
        </div>
      </div>
      <div className="calligraphy-description-wrapper">
        <div className="calligraphy-item-title">{calligraphy.title}</div>
        <p>
          Я разработала анти-стресс прописи для изучения корейского письма.
          Каждую из них можно приобрести отдельно или все вместе со скидкой. Я
          разработала анти-стресс прописи для изучения корейского письма. Каждую
          из них можно приобрести отдельно или все вместе со скидкой.
        </p>
        <div className="calligraphy-item-price">{calligraphy.price}</div>

        <Button
          variant="outline-secondary"
          className="buy-btn"
          onClick={() => {
            if (!user) {
              navigate('/auth/login');
            }
            if (user) {
              handleBuyCalligraphy(calligraphy.id);
              navigate(`/payment/${calligraphy.type}/${calligraphy.id}`);
            }
          }}
        >
          Купить
        </Button>
      </div>
    </>
  );
}

export default CalligraphyItem;
