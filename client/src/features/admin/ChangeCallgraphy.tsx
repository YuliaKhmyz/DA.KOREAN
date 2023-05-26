import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-named-as-default
import { Container } from 'react-bootstrap';
import AddCalligraphyForm from '../calligraphy/AddCalligraphyForm';
import UpdateDeleteCalligraphies from '../calligraphy/UpdateDeleteCalligraphies';
import Section from '../../Components/Section/Section';

function ChangeCallgraphy(): JSX.Element {
  // Поднятие страницы в начало
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="change-calligraphy" style={{ margin: '0 auto' }}>
      <AddCalligraphyForm />
      <UpdateDeleteCalligraphies />
    </div>
  );
}

export default ChangeCallgraphy;
