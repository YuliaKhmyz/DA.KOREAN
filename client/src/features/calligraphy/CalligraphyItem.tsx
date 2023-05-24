import React, { useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Calligraphy, CalligraphyId } from './types/Calligraphy';

// import koreanSpringBg from '/images/korean_autumn_bg.jpg';
import koreanSummerBg from './korean_summer_bg.jpg';
// import koreanAutumnBg from './korean_autumn_bg.jpg';
// import koreanwinterBg from './korean_winter_bg.jpg';

// можно попробовать замутить функцию со switch..case чтобы на выходе получилась строка
// с абсолютным путём до конкретной картинки

function CalligraphyItem({ calligraphy, handleBuyCalligraphy }: { calligraphy: Calligraphy; handleBuyCalligraphy: (id: CalligraphyId) => void }): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <div className="calligraphy-image-wrapper">
        <img src={koreanSummerBg} alt="осень в Корее" className="calligraphy-bg-image" />
        <div className="calligraphy-corean-title">{calligraphy.koreantitle}</div>
      </div>
      <div className="calligraphy-description-wrapper">
        <div className="calligraphy-item-title">{calligraphy.title}</div>
        <p>Я разработала анти-стресс прописи для изучения корейского письма. Каждую из них можно приобрести отдельно или все вместе со скидкой. Я разработала анти-стресс прописи для изучения корейского письма. Каждую из них можно приобрести отдельно или все вместе со скидкой.</p>

        <Link to="#">
          <Button
            variant="outline-secondary"
            className="buy-btn"
            onClick={() => {
              handleBuyCalligraphy(calligraphy.id);
              navigate('/mypage');
            }}
          >
            Купить
          </Button>
        </Link>
      </div>
    </>
  );
}

export default CalligraphyItem;
