import React from 'react';
import './Section.css';

type SectionProps = {
  haveHeader?: boolean;
  children: JSX.Element;
};

function Section({ children, haveHeader }: SectionProps): JSX.Element {
  return <section style={haveHeader ? { paddingTop: '122px' } : { padding: '0px' }}>{children}</section>;
}

export default Section;
