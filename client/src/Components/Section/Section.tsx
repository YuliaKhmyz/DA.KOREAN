import React from 'react';
import './section.css';

type SectionProps = {
  haveHeader?: boolean;
  children: JSX.Element;
};

function Section({ children, haveHeader }: SectionProps): JSX.Element {
  return <section style={haveHeader ? { paddingTop: '122px' } : { padding: '0px', borderBottom: '1px solid black' }}>{children}</section>;
}

export default Section;
