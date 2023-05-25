import React from 'react';
import { Container } from 'react-bootstrap';
import Section from '../Section/Section';
import './notFoundPage.css';
import inyan from './logo-img.svg';

function NotFoundPage(): JSX.Element {
  return (
    <Section>
      <Container className="not-found-page-container nfp">
        <h1 className="main-title">404</h1>
        <h2 className="subtitle">요청한 페이지를 찾을 수 없습니다.</h2>
        <p className="text">존재하지 않은 주소를 입력하셨습니다. 요청한 페이지의 주소가 변경, 삭제 되어 찾을 수 없습니다. 입력하신 주소가 정확한지 다시 한 번 확인해 주시기 바랍니다.</p>
        <div className="logo">
          <img src={inyan} alt="inyan" />
        </div>
      </Container>
    </Section>
  );
}

export default NotFoundPage;
