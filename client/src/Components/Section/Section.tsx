import React from 'react';
import './section.css';

type SectionProps = {
  children: JSX.Element;
};

function Section({ children }: SectionProps): JSX.Element {
  return <section className="section">{children}</section>;
}

export default Section;
