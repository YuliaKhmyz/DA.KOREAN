import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import { sendNews } from './newsSubscribeFormSlice';
import SuccessSubscribeModal from '../../Components/SuccessSubscribeModal/SuccessSubscribeModal';

type FormInput = {
  email: string;
};

type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function NewsSubscribeForm(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (): void => {
    if (value !== '') {
      setShowModal(!showModal);
    }
  };

  const onInputChange = (evt: React.ChangeEvent<FormControlElement>): void => {
    setValue(evt.target.value);
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const dispatchResult = await dispatch(sendNews(data.email));
    console.log(dispatchResult);
    setValue('');
    reset();
  };

  return (
    <>
      <Form className="subscribe-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 subscribe-form-group" controlId="exampleForm.ControlInput1">
          <Form.Label>Ненавязчивая рассылка о новостях сайта, новых курсах и скидках</Form.Label>
          <Form.Control value={value} type="email" placeholder="Email" {...register('email')} onChange={(evt) => onInputChange(evt)} />
          <Button type="submit" variant="outline-light" className="subscribe-btn" onClick={toggleModal}>
            Подписаться
          </Button>{' '}
        </Form.Group>
      </Form>

      {showModal && <SuccessSubscribeModal toggleModal={toggleModal} />}
    </>
  );
}

export default NewsSubscribeForm;
