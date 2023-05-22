import React, { useEffect, useState } from 'react';

import { Calligraphy, CalligraphyId } from './types/Calligraphy';

function CalligraphyItem({
  calligraphy,
}: {
  calligraphy: Calligraphy;
}): JSX.Element {
  return (
    <div>
      <h4>{calligraphy.koreantitle}</h4>
      <p>{calligraphy.title}</p>
      <button type="button">
        <a href={calligraphy.link}>Купить</a>
      </button>
    </div>
  );
}

export default CalligraphyItem;
