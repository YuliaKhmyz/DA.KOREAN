import React, { useEffect } from 'react';
import './calligraphySection.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hierog_spring from './hierog_spring.svg';
import hierog_summer from './hierog_summer.svg';
import hierog_autumn from './hierog_autumn.svg';
import hierog_winter from './hierog_winter.svg';

function CalligraphySection(): JSX.Element {
  // Поднятие страницы в начало
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container style={{ height: '100vh' }}>
      <div className="calligraphy column-content-container">
        <h2 className="calligraphy-title">анти-стресс каллиграфия</h2>
        <p className="calligraphy-description">Каллиграфия — это искусство красивого письма, в котором отражена целостность отдельных букв, всего текста, воплощенного в гармонии форм и ритма. В современном мире с бешеным ритмом жизни занятие каллиграфией это то, что может принести успокоение, снять стресс и обрести внутреннюю гармонию. </p>
        <div className="hieroglyphs">
          <div className="hieroglyph">
            <div className="hieroglyph-korean">
              <img src={hierog_spring} alt="иероглиф весна" />
            </div>
            <div className="hieroglyph-russian">весна</div>
          </div>
          <div className="hieroglyph">
            <div className="hieroglyph-korean">
              <img src={hierog_summer} alt="иероглиф лето" />
            </div>
            <div className="hieroglyph-russian">лето</div>
          </div>
          <div className="hieroglyph">
            <div className="hieroglyph-korean">
              <img src={hierog_autumn} alt="иероглиф осень" />
            </div>
            <div className="hieroglyph-russian">осень</div>
          </div>
          <div className="hieroglyph">
            <div className="hieroglyph-korean">
              <img src={hierog_winter} alt="иероглиф зима" />
            </div>
            <div className="hieroglyph-russian">зима</div>
          </div>
        </div>
        <Link to="/calligraphy">
          <Button variant="outline-light" className="more-info">
            Подробнее
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default CalligraphySection;
