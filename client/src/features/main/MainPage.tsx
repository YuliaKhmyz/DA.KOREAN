import React from 'react';
import Section from '../../Components/Section/Section';
import FirstSection from '../../Components/FirstSection/FirstSection';
import CoursesSection from '../../Components/CoursesSection/CoursesSection';
import CalligraphySection from '../../Components/CalligraphySection/CalligraphySection';

function MainPage(): JSX.Element {
  return (
    <>
      <Section haveHeader={false}>
        <FirstSection />
      </Section>
      <Section haveHeader={false}>
        <CoursesSection />
      </Section>
      <Section haveHeader={false}>
        <CalligraphySection />
      </Section>
    </>
  );
}

export default MainPage;
