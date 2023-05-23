import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Calligraphy, CalligraphyId } from './types/Calligraphy';
import { useAppDispatch } from '../../store';
import { updateCalligraphy } from './calligraphiesSlice';

interface FormInput {
  title: string;
  koreantitle: string;
  link: string;
}

function ChangeCalligraphyItem({
  calligraphy,
  handleDelete,
}: {
  calligraphy: Calligraphy;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const addInput = (): void => {
    setShow((prev) => !prev);
  };

  function handleUpdate(newCalligraphy: Calligraphy): Calligraphy {
    return newCalligraphy;
  }
  const cangedItem = handleUpdate(calligraphy);

  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(cangedItem.id);

    console.log(data);

    const dispatchResult = await dispatch(
      updateCalligraphy({
        id: cangedItem.id,
        title: data.title,
        link: data.link,
        koreantitle: data.koreantitle,
      })
    );
    setShow((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h4>{calligraphy.koreantitle}</h4>
        <p>{calligraphy.title}</p>

        {!show ? (
          <button
            type="button"
            data-set={calligraphy.id}
            onClick={() => addInput()}
          >
            Редактировать
          </button>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input
              defaultValue={calligraphy.koreantitle}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('koreantitle')}
            />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input defaultValue={calligraphy.title} {...register('title')} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input defaultValue={calligraphy.link} {...register('link')} />
            <button type="submit" onClick={() => handleUpdate(calligraphy)}>
              Сохранить изменения
            </button>
          </form>
        )}

        <button type="submit" onClick={handleDelete}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default ChangeCalligraphyItem;
