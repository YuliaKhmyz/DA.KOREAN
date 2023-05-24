import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import { Button, Form } from 'react-bootstrap';
import { sendNews } from './newsSubscribeFormSlice';

type FormInput = {
  email: string;
};

function NewsSubscribeForm(): JSX.Element {
  const { register, handleSubmit } = useForm<FormInput>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data.email);
    const dispatchResult = await dispatch(sendNews(String(data.email)));
    console.log(dispatchResult);
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
