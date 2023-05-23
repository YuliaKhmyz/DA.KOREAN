import React from 'react';
import './section.css';

type SectionProps = {
  haveHeader: boolean;
  haveFooter: boolean;
  children: JSX.Element;
};

function Section({ children, haveHeader, haveFooter }: SectionProps): JSX.Element {
  const getStyles = (headerInfo: boolean, footerInfo: boolean): NonNullable<unknown> => {
    let result = {};
    if (headerInfo && footerInfo) {
      result = { paddingTop: '122px', paddingBottom: '370px' };
    } else if (headerInfo && !footerInfo) {
      result = { paddingTop: '122px' };
    } else {
      result = { paddingBottom: '370px' };
    }
    return result;
  };
  return <section style={getStyles(haveHeader, haveFooter)}>{children}</section>;
}

export default Section;
