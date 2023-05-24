import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import { Container } from 'react-bootstrap';
import AddCalligraphyForm from '../calligraphy/AddCalligraphyForm';
import UpdateDeleteCalligraphies from '../calligraphy/UpdateDeleteCalligraphies';
import Section from '../../Components/Section/Section';

function ChangeCallgraphy(): JSX.Element {
  return (
    <Section>
      <Container>
        <AddCalligraphyForm />
        <UpdateDeleteCalligraphies />
      </Container>
    </Section>
  );
}

export default ChangeCallgraphy;
