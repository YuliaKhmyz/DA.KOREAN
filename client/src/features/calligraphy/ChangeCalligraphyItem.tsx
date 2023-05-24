import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Container } from 'react-bootstrap';
import { Calligraphy, CalligraphyId } from './types/Calligraphy';
import { useAppDispatch } from '../../store';
import { updateCalligraphy } from './calligraphiesSlice';
import './updateCalligraphy.css';

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
      }),
    );
    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="calligraphy-image-wrapper">
        <div className="calligraphy-corean-title">
          {calligraphy.koreantitle}
        </div>
      </div>

      <div className="admin calligraphy-description-wrapper">
        {/* <h4>{calligraphy.koreantitle}</h4> */}
        <div className="calligraphy-item-title">{calligraphy.title}</div>

        {!show ? (
          <div className="calligraphy-change-btns">
            <Button
              className="update-btn"
              variant="outline-secondary"
              type="button"
              data-set={calligraphy.id}
              onClick={() => addInput()}
            >
              Редактировать
            </Button>
            <Button
              variant="outline-secondary"
              className="delete-btn"
              type="submit"
              onClick={handleDelete}
            >
              Удалить
            </Button>
          </div>
        ) : (
          <Container className="updateform-container">
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form className="updateform" onSubmit={handleSubmit(onSubmit)}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <label htmlFor="koreantitle" className="updateform-label">
                <input
                  id="koreantitle"
                  defaultValue={calligraphy.koreantitle}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register('koreantitle')}
                />
              </label>
              <label htmlFor="title" className="updateform-label">
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <input
                  id="title"
                  defaultValue={calligraphy.title}
                  {...register('title')}
                />
              </label>
              <label htmlFor="link" className="updateform-label">
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <input
                  id="link"
                  defaultValue={calligraphy.link}
                  {...register('link')}
                />
              </label>
              <Button
                variant="outline-secondary"
                className="save-btn"
                type="submit"
                onClick={() => handleUpdate(calligraphy)}
              >
                Сохранить изменения
              </Button>
              <Button
                variant="outline-secondary"
                className="delete-btn"
                type="submit"
                onClick={handleDelete}
              >
                Удалить
              </Button>
            </form>
          </Container>
        )}
      </div>
    </>
  );
}

export default ChangeCalligraphyItem;
