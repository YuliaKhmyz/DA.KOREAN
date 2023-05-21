import React from 'react';
import './section.css';

type SectionProps = {
  haveHeader?: boolean;
  children: JSX.Element;
};

function Section({ children, haveHeader }: SectionProps): JSX.Element {
  return <section style={haveHeader ? { paddingTop: '122px', backgroundColor: '#ccd' } : { padding: '0px' }}>{children}</section>;
}

export default Section;
