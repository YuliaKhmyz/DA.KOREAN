/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import { sendNews } from './newsSubscribeFormSlice';
// import SuccessSubscribeModal from '../../Components/SuccessSubscribeModal/SuccessSubscribeModal';

type FormInput = {
  email: string;
};

// type FormControlElement =
//   | HTMLInputElement
//   | HTMLSelectElement
//   | HTMLTextAreaElement;

function NewsSubscribeForm(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const dispatch = useAppDispatch();
  // const [value, setValue] = useState('');
  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = (): void => {
  //   if (value !== '' || showModal === true) {
  //     setShowModal(!showModal);
  //   }
  // };

  // const onInputChange = (evt: React.ChangeEvent<FormControlElement>): void => {
  //   setValue(evt.target.value);
  // };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const dispatchResult = await dispatch(sendNews(data.email));
    console.log(dispatchResult);
    reset();
  };

  return (
    <Form className="subscribe-form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group
        className="mb-3 subscribe-form-group"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>
          Ненавязчивая рассылка о новостях сайта, новых курсах и скидках
        </Form.Label>
        <Form.Control type="email" placeholder="Email" {...register('email')} />
        <Button type="submit" variant="outline-light" className="subscribe-btn">
          Подписаться
        </Button>{' '}
      </Form.Group>
    </Form>
  );
}

export default NewsSubscribeForm;
