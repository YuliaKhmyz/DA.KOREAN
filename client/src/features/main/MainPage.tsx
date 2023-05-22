import React from 'react';
import Calligraphy from '../../Components/Calligraphy/Calligraphy';
import Section from '../../Components/Section/Section';
import FirstSection from '../../Components/FirstSection/FirstSection';
import CoursesSection from '../../Components/CoursesSection/CoursesSection';
import CalligraphySection from '../../Components/CalligraphySection/CalligraphySection';

function MainPage(): JSX.Element {
  return (
    <>
      <Section haveHeader>
        <FirstSection />
      </Section>
      <Section haveHeader={false}>
        <CoursesSection />
      </Section>
      <Section haveHeader={false}>
        <CalligraphySection />
      </Section>
      <Calligraphy />
    </>
  );
}

export default MainPage;
