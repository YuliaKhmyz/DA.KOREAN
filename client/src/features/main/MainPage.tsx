import React from 'react';
import Calligraphy from '../../Components/Calligraphy/Calligraphy';
import Section from '../../Components/Section/Section';
import FirstSection from '../../Components/FirstSection/FirstSection';

function MainPage(): JSX.Element {
  return (
    <>
      <Section haveHeader>
        <FirstSection />
      </Section>
      <Calligraphy />
    </>
  );
}

export default MainPage;
