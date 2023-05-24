import React from 'react';
import { Button, Form } from 'react-bootstrap';

function NewsSubscribeForm(): JSX.Element {
  return (
    <Form className="subscribe-form">
      <Form.Group
        className="mb-3 subscribe-form-group"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>
          Ненавязчивая рассылка о новостях сайта, новых курсах и скидках
        </Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Button type="submit" variant="outline-light" className="subscribe-btn">
          Подписаться
        </Button>{' '}
      </Form.Group>
    </Form>
  );
}

export default NewsSubscribeForm;
