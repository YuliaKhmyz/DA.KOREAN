import React, { useEffect, useState } from 'react';

import { Calligraphy, CalligraphyId } from './types/Calligraphy';
import { redirect, useNavigate } from 'react-router-dom';

function CalligraphyItem({
  calligraphy,
  handleBuyCalligraphy,
}: {
  calligraphy: Calligraphy;
  handleBuyCalligraphy: (id: CalligraphyId) => void;
}): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <h4>{calligraphy.koreantitle}</h4>
      <p>{calligraphy.title}</p>
      <button
        type="button"
        onClick={() => {
          handleBuyCalligraphy(calligraphy.id), navigate('/mypage');
        }}
      >
        Купить
      </button>
    </div>
  );
}

export default CalligraphyItem;
