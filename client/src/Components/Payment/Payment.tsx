import React from 'react';
import Section from '../Section/Section';
import { useSelector } from 'react-redux';
import { selectCalligraphies } from '../../features/calligraphy/selectors';
import { useParams } from 'react-router-dom';
import { selectMyCalligraphies } from '../../features/userpage/selectors';
import { selectCourses } from '../../features/courses/selectors';
import './payment.css';

function Payment(): JSX.Element {
  const { type, id } = useParams();
  const callId = Number(id);
  const calligraphies = useSelector(selectCalligraphies);
  const courses = useSelector(selectCourses);
  let name;
  // (type === 'calligraphy') ? (name=calligraphies[callId - 1].price) : (name=calligraphies[callId - 1].price)
  if (type === 'calligraphy') {
    name = calligraphies[callId - 1].price;
  }
  if (type === 'course') {
    name = courses[callId - 1].price;
  }

  console.log(name);

  return (
    <Section>
      {/* <div>
        <br />
        <link rel="stylesheet" href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css" />
        <form className="yoomoney-payment-form" action="https://yookassa.ru/integration/simplepay/payment" method="post" acceptCharset="utf-8">
          <div className="ym-payment-btn-block ym-align-space-between">
            <div className="ym-input-icon-rub">
              <input
                name="sum"
                placeholder="0.00"
                className="ym-input ym-sum-input ym-required-input"
                type="number"
                step="any"
                defaultValue={name}
                // disabled
              />
            </div>
            <button data-text="Заплатить" className="ym-btn-pay ym-result-price" type="submit">
              <span className="ym-text-crop">Заплатить</span> <span className="ym-price-output"></span>
            </button>
          </div>
          <input name="shopId" type="hidden" value="323593" />
        </form>
        <script defer src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js" />
      </div> */}
      <div className="payment-container">
        <br />
        <link
          rel="stylesheet"
          href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css"
        />
        <form
          className="yoomoney-payment-form"
          action="https://yookassa.ru/integration/simplepay/payment"
          method="post"
          acceptCharset="utf-8"
        >
          <div className="ym-payment-btn-block">
            <div className="ym-input-icon-rub ym-display-none">
              <input
                name="sum"
                placeholder="0.00"
                className="ym-input ym-sum-input ym-required-input"
                type="number"
                step="any"
                // defaultValue={name}
                value={name}
              />
            </div>
            <div className="payment-wrapper">
              <div className="price">{name} руб.</div>
              <button
                data-text="Заплатить"
                className="ym-btn-pay ym-result-price"
                type="submit"
              >
                <span className="ym-text-crop">Заплатить</span>{' '}
                <span className="ym-price-output" />
              </button>
            </div>
          </div>
          <input name="shopId" type="hidden" value="323593" />
        </form>
        <script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js" />
      </div>
    </Section>
  );
}

export default Payment;
