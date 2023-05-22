import React, { useState } from 'react';
import { Calligraphy, CalligraphyId } from './types/Calligraphy';

function ChangeCalligraphyItem({
  calligraphy,
  handleDelete,
  handleUpdate,
}: {
  calligraphy: Calligraphy;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
  handleUpdate: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  const [elementId, setElementId] = useState<null | number>(null);

  const addInput = (id: CalligraphyId): void => {
    setElementId(id);
  };

  return (
    <div>
      <div>
        <h4>{calligraphy.koreantitle}</h4>
        <p>{calligraphy.title}</p>

        <button
          type="button"
          data-set={calligraphy.id}
          onClick={() => addInput(calligraphy.id)}
          className={
            calligraphy.id === elementId
              ? 'hidden-element'
              : 'hidden-element active'
          }
        >
          Редактировать
        </button>

        <div
          className={
            calligraphy.id === elementId
              ? 'hidden-element active'
              : 'hidden-element'
          }
        >
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}

          <input defaultValue={calligraphy.koreantitle} />
          <input defaultValue={calligraphy.title} />
          <input defaultValue={calligraphy.link} />
          <button type="submit" onClick={handleUpdate}>
            Сохранить изменения
          </button>
        </div>

        <button type="submit" onClick={handleDelete}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default ChangeCalligraphyItem;
