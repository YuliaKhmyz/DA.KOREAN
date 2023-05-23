import React from 'react';
import Section from '../../Components/Section/Section';
import FirstSection from '../../Components/FirstSection/FirstSection';
import CoursesSection from '../../Components/CoursesSection/CoursesSection';
import CalligraphySection from '../../Components/CalligraphySection/CalligraphySection';

function MainPage(): JSX.Element {
  return (
    <>
      <Section>
        <FirstSection />
      </Section>
      <Section>
        <CoursesSection />
      </Section>
      <Section>
        <CalligraphySection />
      </Section>
    </>
  );
}

export default MainPage;
